<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">

        <html>

            <head>
                <title>product</title>
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
                    
            <body >
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
                <h1>product</h1>
                <div style="display:flex; justify-content:center; align-items:center; gap:1rem;">

                    <xsl:for-each select="products/Item">
                        <div style=" display: flex;
            flex-direction: column;
            background-color: #fff;
            border: solid 5px #00c5b2;
            padding: 1rem;
            width: 20rem;
            height: 27rem;
            justify-content: space-between;">
            <div style="display:flex; justify-content:center">
                <img style='width:80%;' src='img.jpg' />
            </div>
                            <div style="display:flex; flex-direction: column;">
                                <div style="display:flex; gap:1rem;">
                                   <small><xsl:value-of select="ID"/></small> 
                                </div>
                                
                                <h3><xsl:value-of select="name"/></h3>
                                <p>
                                    <xsl:value-of select="Detail"/>
                                </p>
                                <h3 style="color:#00a595; text-align:right;"> <xsl:value-of select="price"/>.00฿</h3>
                                <small style="color:#00a595; text-align:right;">Inventory:<xsl:value-of select="QTY"/> Item</small>
                            </div>
                        
                        </div>
                        </xsl:for-each>
                </div>
            </body>
        </html>

    </xsl:template>
</xsl:stylesheet>