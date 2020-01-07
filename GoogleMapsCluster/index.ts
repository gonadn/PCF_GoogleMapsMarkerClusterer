import {IInputs, IOutputs} from "./generated/ManifestTypes";
import DataSetInterfaces = ComponentFramework.PropertyHelper.DataSetApi;
type DataSet = ComponentFramework.PropertyTypes.DataSet;
import * as $ from "jquery"
declare const MarkerClusterer: any;

interface mapOptions {
    zoom: number;
    scrollwheel: boolean;
    center?: google.maps.LatLng; 
}

export class GoogleMapsCluster implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private _context: ComponentFramework.Context<IInputs>;
	private _container: HTMLDivElement;
	private _refreshData: EventListenerOrEventListenerObject;
	private MAPS_API_KEY: string = "";
	private _notifyOutputChanged: () => void;
	private _htmlDivElement: HTMLDivElement;
	private _mapDiv: HTMLDivElement;
	private mapCanvas: any;
	private gMap: google.maps.Map;
	private markerClusterer: any;
	public mapOptions: mapOptions;
	public markers: any = [];

	constructor(public container: HTMLDivElement) {
	}

	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement)
	{		
		this._context = context;
		this._container = document.createElement("div");		
		this._notifyOutputChanged = notifyOutputChanged;

		$( document ).ready(() => {
			this.addGoogleMapsClusterScriptToHeader();
			this.addGoogleScriptToHeader(this._context);

			setTimeout(() => {
				this.initMap();
				this.getCurrentLocation();
				this.getData(this._context);
				this.addMarkerClusterer();
			}, 500);

			this._mapDiv = document.createElement("div");
			this._mapDiv.setAttribute("id", "map");
			this._mapDiv.setAttribute("style", "position:relative;width:100%;height:80vh;border-style: solid;margin:auto;");
			this._container.appendChild(this._mapDiv);
			
			//Associate controls to container
			container.appendChild(this._container);
		});
	}

	public initMap() {	
		if(google !== null && google !== undefined) {
			this.mapCanvas = document.getElementById('map');
			if (this.mapCanvas !== null && this.mapCanvas !== undefined){
				const mapOptions = {
					zoom: 3,
					center: new google.maps.LatLng(0, 0)
				}	
				this.gMap = new google.maps.Map(this.mapCanvas, mapOptions);	
			}
		}
		 //Associate controls to container
		 //this._container.appendChild(this._htmlDivElement);
	}

	public getCurrentLocation() {
		const self = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                self.gMap.setCenter(pos);
				self.mapOptions.center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            }, function () {
                //handleLocationError(true, infoWindow, map.getCenter());
                //do nothing because we have set the center as 0 0 as a backup
			});			
        }
	}

	public getData(context: ComponentFramework.Context<IInputs>) {
        const dataSet = context.parameters.mapDataSet;
		let latField: string = context.parameters.latFieldName.raw ? context.parameters.latFieldName.raw : "";
        let longField: string = context.parameters.longFieldName.raw ? context.parameters.longFieldName.raw : "";
        let nameField: string = context.parameters.primaryFieldName.raw ? context.parameters.primaryFieldName.raw : "";
		const LocalMap = this.gMap;

        if (dataSet == null || latField == "" || longField == "" ) {
            return;
		}

		const infowindow = new google.maps.InfoWindow();
		
		for (let i = 0; i < context.parameters.mapDataSet.paging.totalResultCount; i++) {

            const recordId = dataSet.sortedRecordIds[i];
            const record = dataSet.records[recordId] as DataSetInterfaces.EntityRecord;
			const content = this.buildInforWindow(dataSet.getTargetEntityType(), recordId, record, dataSet.columns);
			const latitutde = record.getValue(latField) as any;
			const longitutde = record.getValue(longField) as any;
            const accountLatLng = { lat: parseFloat(latitutde), lng: parseFloat(longitutde) };
			//const myLatLng = { lat: 59.913868, lng: 10.752245};
			const _title = record.getValue(nameField) as any; 
			console.log(_title);
			console.log(accountLatLng);

			if (google !== null && google !== undefined) {
				const marker = new google.maps.Marker({
					position: accountLatLng,
					map: this.gMap,
					title: _title
				});		
				this.markers.push(marker);

				google.maps.event.addListener(marker, 'click', ((marker: any, content: any) => {
					return  () => {
						infowindow.setContent(content);
						infowindow.open(LocalMap, marker);
					}
				})(marker, content));
			}				
		}
		  this.gMap = LocalMap;
	}

	public addMarkerClusterer(){
		const img = {
			imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
			gridSize: 10,
			minimumClusterSize: 2
		  };
	  
		  if (this.markers !== null && this.markers !== undefined) {
			if (this.markers.length > 0) {
				this.markerClusterer = new MarkerClusterer(this.gMap, this.markers, img);
				this.markerClusterer.addMarkers(this.markers);
			}
		  }
	}

	public addGoogleScriptToHeader(context: any): void {
		const apiKey = context.parameters.googleMapsAPIKey.raw != null && context.parameters.googleMapsAPIKey.raw != "val" ? context.parameters.googleMapsAPIKey.raw : "";
		let headerScript: HTMLScriptElement = document.createElement("script");
        headerScript.type = 'text/javascript';
        headerScript.id = "GoogleHeaderScript";
		//headerScript.src = "https://maps.googleapis.com/maps/api/js?key=" + this.MAPS_API_KEY;
		headerScript.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey;
		headerScript.onload = this.initMap;
        document.body.appendChild(headerScript);
	}

	public addGoogleMapsClusterScriptToHeader(): void {
		let headerScript: HTMLScriptElement = document.createElement("script");
        headerScript.type = 'text/javascript';
        headerScript.id = "googleMapsClusterId";
        //var apiKey = context.parameters.googleMapsAPIKey.raw != null && context.parameters.googleMapsAPIKey.raw != "val" ? context.parameters.googleMapsAPIKey.raw : "";
        headerScript.src = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js";
        document.body.appendChild(headerScript);
	}

	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		console.log("update view called");
		$( document ).ready(() => {
			setTimeout(() => {
				this.initMap();
				this.getCurrentLocation();
				this.getData(context);
				this.addMarkerClusterer();
			}, 500);			
		});
	}

	public buildInforWindow(recEntityType: string, recId: string, rec: DataSetInterfaces.EntityRecord, cols: DataSetInterfaces.Column[]): HTMLDivElement {
        var divTag = document.createElement("div");
        divTag.id = recId;

        let content: string = "";
        let primaryField: string = this._context.parameters.primaryFieldName.raw ? this._context.parameters.primaryFieldName.raw : "";
        var titleString = rec.getValue(primaryField).toString();
        var titleTag = document.createElement("a");
        titleTag.href = "#";
        titleTag.className = "infoTitle";
        titleTag.innerHTML = titleString;
        divTag.appendChild(titleTag);

        //initialise table
        content = content.concat("</br></br><table class='infotable'>");
        for (var i = 0; i < cols.length; i++) {
            //add exclusion criteria to exclude lat,long, primary field and id
            if (cols[i].name != this._context.parameters.latFieldName.raw &&
                cols[i].name != this._context.parameters.primaryFieldName.raw &&
                cols[i].name != this._context.parameters.longFieldName.raw) {
                //create row of data
                content = content.concat("<tr><th class='infoth'>" + cols[i].displayName + ": </th>");
                var strValue = rec.getFormattedValue(cols[i].name) != null ? rec.getFormattedValue(cols[i].name) : "";
                content = content.concat("<td class='infotd'> " + strValue + "</td></tr>");
            }
        }
        //close table
        content = content.concat("</table>");

        var contentHTML: HTMLElement = document.createElement("span");
        contentHTML.innerHTML = content;
        divTag.appendChild(contentHTML);

        google.maps.event.addDomListener(titleTag, 'click', this.openRecord.bind(null, this._context, titleString, recEntityType, recId), false);
        return divTag;
	}
	
    public openRecord(context: ComponentFramework.Context<IInputs>, recName: string, recType: string, recId: string): void {
        let entityFormOptions = {
            entityName: recType,
            entityId: recId,
        }
        // context.parameters.mapDataSet.openDatasetItem(recordRef);
        context.navigation.openForm(entityFormOptions);
        //the other option is to build a url using context.page.appId?
    }

	public getOutputs(): IOutputs
	{
		return {};
	}

	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}
}