<h1>PCF - Google Maps MarkerClusterer</h1>
A PCF control to render a view of records on Google Maps using the location information (lat/long) againt each record.

<h2>Features</h2>
<ul>
  <li>The control uses the columns in the view to display an information window when a location marker is clicked.</li>
  <li>The information window also includes a configurable title that will navigate the user to the respective record</li>
  <li>The control also requests your current location to display the map in the correct area. Location data is not transmitted externally</li>
  <li>The control also requests your current location to display the map in the correct area. Location data is not transmitted externally. You can choose to deny this permission and the map will load at lat/long 0,0.</li>
</ul>

<p>NOTE: You will need to provide a Google Maps API Key.</p>

<img src='https://lh3.googleusercontent.com/pQmGzA885G_inNB10s5185Oc2s1I3yekjY8Kj3P43yUK8VlZJo7UYc3Vf4QbywsuCHfrMXUDnuGSdsvjEE08ux2xTxonQqeotZvb_JmbMWfLjvPJAgBg2A3na4eWN1FKIxXbAb8iW68P3kmnjLNo2wvSbf8u1_o4DbxmtMOP9I41nt0OkRfWJJRMsynUn0lDo0lrR3h32D-rV56AM-m8TJhMHy3JNEVpExHHduP9NyMUe7ckm1j5rsvgUwZXcVe8swxlNcjTkpYF1AKl2jypVbU-qWr7vqAB1Q2yOXBlJ0lvGZOoI3jsXBsQih-3XOmdwxqRknVPVnDhtwTGyCVLHMcbTBlVFmVbDjIS4YwRA_oVZCy7Qc0xaUgtm-wAZahVCfhPeWJNg86Y1eHeB2cg-tqL89qQt0pZAZmM-v0M8vARpn1RhwcYRyVrBS6xH68DrVXI_-DdB5_aFXR6y5bTnU85Zxqhggvjkusg-2v4jf4_Vy73KZPZDgV-Rn_WlJlRKM1ISqiVNRZaEOqJRDF94d5YQs7cR7rFc5NPDdy-8Ihv8sMDB09nJg9do6lkUBYuSz_iX_0M8lzoHZDekCsE3UbNc_kcMjC8oRwsVCMuqhD05afLZdgYyuOjiYBewNX0MoL7VkczBRy9zoePxgpnnNUrC6VarMtiaUlXRh0pciKPm7EXSKC8reU=w1669-h905-no' alt='' >
</br>

<h2>Configuration</h2>

<p>Use the following steps to configure a Google Maps MarkerClusterer against a view after installing the solution</p>

<ul>
  <li>1. Add the desired columns/filters to a view. Reember to include the respective latitude and longitude fields in the view. To keep     things clean, the lat/long fields are ignored when displaying the information window</li>
  <li>2. Click the 'Custom Control' button to add the control</li>
  <li>3. Select the 'GoogleMapsCluster' control</li>
  <li>
     Control parameters (Screenshot below):
      <ul>
        <li>i. Primary Field - The logical name of the primary field to be used as the title for the information window when a marker is clicked</li>
        <li>ii. Latitude Field - The logical name of the latitude field to be used to pin point the location of a particular record</li>
        <li>iii. Longitude Field - The logical name of the longitude field to be used to pin point the location of a particular record</li>
        <li>iv. Google Maps API Key - The API key to allow Google Maps to load</li>
      </ul>
  </li>
  
</ul>
