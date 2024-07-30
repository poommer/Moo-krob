<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">

        <html>

            <head>
                <title>employee</title>
                <style>
                    *{
                        margin: 0;
                        box-sizing: border-box;
                        font-family: 'LINE Seed Sans TH';
                        text-decoration: none;
                    }
                    a{
                        font-size: 24px; 
                        color: rgb(239, 218, 54);
                    }
            
                    a:hover{
                        color: none;
                    }
                    a:active{
                        color: none;
                    }
            
                </style>
            </head>

            <body style="font-family: 'LINE Seed Sans TH';">
                <nav style="display: flex; align-items: center; justify-content: space-between; background-color: #00ab89;">
                    <a href="/">
                 <div style='display: flex;  align-items: center; gap: .5rem;'>
                         <img style='width:5rem; display: flex;' src="img.jpg" alt=""/>
                         <h1 style="color: #fff;">Moo krob By PooM</h1>
                     </div>
                 </a>
             
                 <div style="display: flex; gap: 1rem;">
                     <a href="product.xml" target="_blank">product</a>
                     <a href="order.xml" target="_blank">order</a>
                     <a href="customer.xml" target="_blank">customer</a>
                     <a href="employee.xml" target="_blank">employee</a>
                     <a href="contact.html" >contact</a>
                 </div>
                </nav>
                <h1>employee</h1>
                <table style="border-collapse: collapse; width:100%; overflow: hidden; border-radius: 15px;     box-shadow: 2px 2px 8px 2px #4a4a4a4d;">
                    <tr style="background: #008695; width:100%; color: #fff;   text-align:left; font-size:18px;">
                        <th style="padding-left:15px;">#</th>
                        <th style="">first name</th>
                        <th style="">last name</th>
                        <th style="">email</th>
                        <th style="">tel</th>
                    </tr>
                    <xsl:for-each select="employees/person">
                        <tr style=" font-size:18px; color:#3e3e3e;">
                            <td style="    border-bottom: solid #e5e5e5 1px; padding-left:15px;"><xsl:value-of select="ID"/></td>
                            <td style="    border-bottom: solid #e5e5e5 1px;"><xsl:value-of select="firstName"/></td>
                            <td style="    border-bottom: solid #e5e5e5 1px;"><xsl:value-of select="lastName"/></td>
                            <td style="    border-bottom: solid #e5e5e5 1px;"><xsl:value-of select="email"/></td>   
                            <td style="    border-bottom: solid #e5e5e5 1px;"><xsl:value-of select="tel"/></td>
                        </tr>
                    </xsl:for-each>
                    
                </table>
            </body>
        </html>

    </xsl:template>
</xsl:stylesheet>