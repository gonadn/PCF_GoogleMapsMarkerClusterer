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

<p>YouTube: https://www.youtube.com/watch?v=1JNwpp5L4vM</p>
<p>Google Maps Platform: https://developers.google.com/maps/documentation/embed/get-api-key</p>

<img src='https://lh3.googleusercontent.com/nKSzq4OqCQCTmCo0T4vECTZwrP4l_FL07XZcjwUddO1-qi9p28jdKKLGbgY2_mCc3YQKlGiNUUO0WUaEEcpscUwnidB9uZu4A2p9oOsLBxEDrlZVE9rhh-V8zAjG6HFWWLNShuz-XYVNHajwXlIm3-h_xGZGmg0zScAIgz3kAzCJxvxtAHWUruG6geqHIw3lVATzCk-nWoNT7rXk6lk4dmI4nmR3Qjx7AhRDtaVJDXWpmAGMFpzMd83Y2I7XCWk3xlI2_CM7xPfQr6-MZes47pGyywSHpJdOP3s5gTm43cuEnqdRdFK-kmc0idNB4doNOyrkf7aodkjpg23VHPfv13AdhvBXxWK6Vf7RCzd-HN9kXSdVTarTC9E4LSlm6mNOiYc_SJdpcAy4CkjcA4WCfK5Jg0eVXY6mwwVL6csOXm-unlnvvGYwJAZbZ23qYYFdjCAbvi3olnQbYrCTIKgEqIvtlkqYL_PAunVqwXSFPb5SVQ5JgkcDBZ4WKdHfqFBhfy_3zgsjQVtsSKr0Qr_WRY3DKNohEVyQfYX8snFdhbOYLUtP6KvOe3C_FiKj_CTolCw0LeJgxt2ZPiJaXVZ5Mrwz_hj1j6TN2Bl_Kw_W-s7jAzCtkwsXzuKWDJmQRzydOdUDaSnJSDtmAaYq7Eoa2XBt0AwcDnCY4NmrpNRbJoPs_8ItkyyBs_7UYMV5QfjU1wHBdd2dq4d6J47OcpsaT8btJSZPhyMvEHk8Y7Cjr4_196NJ=w1669-h905-no' >

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

<img src='https://lh3.googleusercontent.com/0Hyl_pWCl69eL1rsepU4yFEeArUDiFz7pgDX5q0cx602nQPoxOPizeqLwE471KhDcGmQ_UbZQzL5qb0Ef9S1rAZPge7rApga2N_g0E_XJsHXz_IKvvW1_vEgOP0o8Sv0x6JUs7kQ-6RKCv0IZmdfzCzvroGtwZ9lJiKRT4Gx_4j-1A-FHdxfuHKv9oUxcksT8xv238w--mcN54ON2LhJywx5nj5cR6W2rr84e3DwKLzM2SYF5k_OaaYyx_JSfPIvBQhBzW7RYkhOOeLZ2NL1qDwen1OHxYqv5ZKXoJaa8K5_03HniVNgG53OHPYLGDWhP8tYHFfF8qwZ3E5x09oYliJY6m1jKU9zvz6tAapLu0E62mk46c4fId-ohyEqt75bdcD9twa1FOpCdYxSvoP-dNIT1YBqlRumiqiYt4I_7nBLUidN4pCRFGp1vWITNvMy4-H7AY_fcppKW5branDYROPwUOeAUs9_aws9_aItH0Wb1KANI9vt8ejuIhDW4xZlRw9XDNvnIsnc40YgfDVOwScSHO08a6mlUH59tDCP7WPDuce0qEeTMfMsSQrVZSywUvZKT6OxxawMbS5ujUReJFmypa9AhU-p3jaRkkBaLqrEazhNBxBx3G7MgGUM_pJ623ZFuKt1Wuf4LeRLpMZo83kJbi1vE8Vv0qf4ajwisyU65kfP37P9WkvVBSM7_REpC9mEEbDDRbgipL7PyeXq_EKK0vu87Ixl_SvTk3KW3YxGqztJ=w502-h486-no' alt='' >
