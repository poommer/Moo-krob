function myFunction(xml,IDshow) {
    var ID, namePro, Detail, price, QTY, i, xmlDoc, txt1, txt2, txt3, txt4, txt5, txt6  ;
    xmlDoc = xml.responseXML;
    txt1 = " ";
    txt2 = " ";
    txt3 = " ";
    txt4 = " ";
    txt5 = " ";

    ID = xmlDoc.getElementsByTagName("ID");
    namePro = xmlDoc.getElementsByTagName("name");
    Detail = xmlDoc.getElementsByTagName("Detail");
    price = xmlDoc.getElementsByTagName("price");
    QTY = xmlDoc.getElementsByTagName("QTY");

    table = `
            <tr style="background: #008695; width:100%; color: #fff;   text-align:left; font-size:18px;">
            <th style="padding-left:15px;">date</th>
            <th>customere Tel</th>
            <th>Item</th>
            <th>QTY</th>
            <th>amount</th>
            </tr>
            `
    for (i = 0; i < ID.length; i++) {
        table += `
        <tr style=" font-size:18px; color:#3e3e3e;">
        <td style="border-bottom: solid #e5e5e5 1px; padding-left:15px;">${ID[i].childNodes[0].nodeValue}</td>
        <td style="border-bottom: solid #e5e5e5 1px;">${namePro[i].childNodes[0].nodeValue}</td>
        <td style="border-bottom: solid #e5e5e5 1px;">${Detail[i].childNodes[0].nodeValue}</td>
        <td style="border-bottom: solid #e5e5e5 1px;">${price[i].childNodes[0].nodeValue}</td>
        <td style="border-bottom: solid #e5e5e5 1px;">${QTY[i].childNodes[0].nodeValue}</td>
        </tr>
        
        `
    
      }
    document.getElementById("table_product").innerHTML = table;
      console.log(table);
      
    }
  


function loadData() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "product.xml", true);
    xmlhttp.send();

}
