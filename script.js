function show_product(xml) {
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
            <th style="padding-left:15px;">รหัสสินค้า</th>
            <th>ชื่อสินค้า</th>
            <th>รายละเอียด</th>
            <th>ราคา</th>
            <th>คงเหลือ</th>
            </tr>
            `
    for (i = 0; i < ID.length; i++) {
        table += `
        <tr style="" font-size:18px; color:#3e3e3e;">
        <td style=""width:15% border-bottom: solid #e5e5e5 1px; padding-left:15px;">${ID[i].childNodes[0].nodeValue}</td>
        <td style=""width:15% border-bottom: solid #e5e5e5 1px;">${namePro[i].childNodes[0].nodeValue}</td>
        <td style=""width:30% border-bottom: solid #e5e5e5 1px;">${Detail[i].childNodes[0].nodeValue}</td>
        <td style="width:20% border-bottom: solid #e5e5e5 1px;">฿${price[i].childNodes[0].nodeValue}.00</td>
        <td style="width:20% border-bottom: solid #e5e5e5 1px;">${QTY[i].childNodes[0].nodeValue}</td>
        </tr>
        
        `
    
      }
    document.getElementById("table_product").innerHTML = table;
      console.log(table);
      
    }

function show_customer(xml) {
    var Fname, Lname, bod, Email, tel, i, xmlDoc, txt1, txt2, txt3, txt4, txt5, txt6  ;
    xmlDoc = xml.responseXML;
    txt1 = " ";
    txt2 = " ";
    txt3 = " ";
    txt4 = " ";
    txt5 = " ";

    Fname = xmlDoc.getElementsByTagName("Fname");
    Lname = xmlDoc.getElementsByTagName("Lname");
    bod = xmlDoc.getElementsByTagName("birthday");
    Email = xmlDoc.getElementsByTagName("email");
    tel = xmlDoc.getElementsByTagName("tel");

    table = `
            <tr style="background: #008695; width:100%; color: #fff;   text-align:left; font-size:18px;">
            <th style="width:20%;">ชื่อจริง</th>
            <th style="width:20%;">นามสกุล</th>
            <th style="width:20%;">วันเกิด</th>
            <th style="width:20%;">E-mail</th>
            <th style="width:20%;">เบอร์โทรศัพท์</th>
            </tr>
            `
    for (i = 0; i < Fname.length; i++) {
        table += `
        <tr style=" font-size:18px; color:#3e3e3e;">
        <td style="width:20%; border-bottom: solid #e5e5e5 1px; padding-left:15px;">${Fname[i].childNodes[0].nodeValue}</td>
        <td style="width:20%; border-bottom: solid #e5e5e5 1px;">${Lname[i].childNodes[0].nodeValue}</td>
        <td style="width:20%; border-bottom: solid #e5e5e5 1px;">${bod[i].childNodes[0].nodeValue}</td>
        <td style="width:20%; border-bottom: solid #e5e5e5 1px;">${Email[i].childNodes[0].nodeValue}</td>
        <td style="width:20%; border-bottom: solid #e5e5e5 1px;">${tel[i].childNodes[0].nodeValue}</td>
        </tr>
        
        `
    
      }
    document.getElementById("table_customer").innerHTML = table;
      console.log(table);
      
    }
function show_employee(xml) {
    var Fname, Lname, bod, Email, tel, i, xmlDoc, txt1, txt2, txt3, txt4, txt5, txt6  ;
    xmlDoc = xml.responseXML;
    txt1 = " ";
    txt2 = " ";
    txt3 = " ";
    txt4 = " ";
    txt5 = " ";

    ID = xmlDoc.getElementsByTagName("ID");
    firstName = xmlDoc.getElementsByTagName("firstName");
    lastName = xmlDoc.getElementsByTagName("lastName");
    email = xmlDoc.getElementsByTagName("email");
    tel = xmlDoc.getElementsByTagName("tel");

    table = `
            <tr style="background: #008695; width:100%; color: #fff;   text-align:left; font-size:18px;">
                <th style="width:20%;">รหัสพนักงาน</th>
                <th style="width:20%;">ชื่อจริง</th>
                <th style="width:20%;">นามสกุล</th>
                <th style="width:20%;">E-mail</th>
                <th style="width:20%;">เบอร์โทรศัพท์</th>
            </tr>
            `
    for (i = 0; i < ID.length; i++) {
        table += `
        <tr style=" font-size:18px; color:#3e3e3e;">
        <td style="width:20%; border-bottom: solid #e5e5e5 1px; padding-left:15px;">${ID[i].childNodes[0].nodeValue}</td>
        <td style="width:20%; border-bottom: solid #e5e5e5 1px;">${firstName[i].childNodes[0].nodeValue}</td>
        <td style="width:20%; border-bottom: solid #e5e5e5 1px;">${lastName[i].childNodes[0].nodeValue}</td>
        <td style="width:20%; border-bottom: solid #e5e5e5 1px;">${email[i].childNodes[0].nodeValue}</td>
        <td style="width:20%; border-bottom: solid #e5e5e5 1px;">${tel[i].childNodes[0].nodeValue}</td>
        </tr>
        
        `
    
      }
    document.getElementById("table_employee").innerHTML = table;
      console.log(table);
      
    }
function show_order(xml) {
    var Fname, Lname, bod, Email, tel, i, xmlDoc, txt1, txt2, txt3, txt4, txt5, txt6  ;
    xmlDoc = xml.responseXML;
    txt1 = " ";
    txt2 = " ";
    txt3 = " ";
    txt4 = " ";
    txt5 = " ";

    date = xmlDoc.getElementsByTagName("date");
    cusTel = xmlDoc.getElementsByTagName("cusTel");
    Item = xmlDoc.getElementsByTagName("Item");
    QTY = xmlDoc.getElementsByTagName("QTY");
    amount = xmlDoc.getElementsByTagName("amount");

    table = `
            <tr style="background: #008695; width:100%; color: #fff;   text-align:left; font-size:18px;">
             <th style="width:20%;">วันที่</th>
            <th style="width:20%;">รหัสลูกค้า (เบอร์โทรศัพท์)</th>
            <th style="width:20%;">รหัสสินค้า</th>
            <th style="width:20%;">จำนวนสินค้า</th>
            <th style="width:20%;">ราคารวม</th>
            </tr>
            `
    for (i = 0; i < date.length; i++) {
        table += `
        <tr style=" font-size:18px; color:#3e3e3e;">
        <td style="width:20%; border-bottom: solid #e5e5e5 1px; padding-left:15px;">${date[i].childNodes[0].nodeValue}</td>
        <td style="width:20%; border-bottom: solid #e5e5e5 1px;">${cusTel[i].childNodes[0].nodeValue}</td>
        <td style="width:20%; border-bottom: solid #e5e5e5 1px;">${Item[i].childNodes[0].nodeValue}</td>
        <td style="width:20%; border-bottom: solid #e5e5e5 1px;">${QTY[i].childNodes[0].nodeValue}</td>
        <td style="width:20%; border-bottom: solid #e5e5e5 1px;">฿${amount[i].childNodes[0].nodeValue}.00</td>
        </tr>
        
        `
    
      }
    document.getElementById("table_order").innerHTML = table;
      console.log(table);
      
    }
  


function loadData(dataName) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if(dataName === 'product'){
          show_product(this)
        }
    
        else  if(dataName === 'customer'){
          show_customer(this)
        }
    
        else  if(dataName === 'employee'){
           show_employee(this)
        }
        
        else  if(dataName === 'order'){
          show_order(this)
        }
      }
    };
    


    if(dataName === 'product'){
      xmlhttp.open("GET", "product.xml", true);
    }

    else  if(dataName === 'customer'){
      xmlhttp.open("GET", "customer.xml", true);
    }

    else  if(dataName === 'employee'){
      xmlhttp.open("GET", "employee.xml", true);
    }
    
    else  if(dataName === 'order'){
      xmlhttp.open("GET", "order.xml", true);
    }
    
    xmlhttp.send();

}
