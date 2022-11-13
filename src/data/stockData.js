const products = 
[{"id":1,"categoria":"hogar","producto":"Vaso-Mate","stock":9,"precio":"$6600","material":"Cerámica","info":"Alto: 9 cm\nDiámetro: 9,2 cm\nAncho boca: 6 cm\nMaterialidad: Cerámica gres, interior esmaltado blanco.\nApto para microondas, horno y lavavajillas, no fuego directo."},
{"id":2,"categoria":"macetas","producto":"Macetero Cara","stock":5,"precio":"$6.000","material":"Cerámica gres","info":"Alto: 10 cm\nDiámetro: 9,1 cm\nMaterialidad: Cerámica gres."},
{"id":3,"categoria":"macetas","producto":"Florero Trazo Blanco","stock":10,"precio":"$7.500","material":"Cerámica gres","info":"Alto: 14 cm\nDiámetro general: 10 cm\nMaterialidad: Cerámica gres."},
{"id":4,"categoria":"cocina ","producto":"Bowl Ramal","stock":12,"precio":"$2.700","material":"Cerámica gres","info":"Alto: 8 cm\nDiámetro general: 14,5 cm\nMaterialidad: Cerámica gres."},
{"id":5,"categoria":"macetas","producto":"Florero Trazo Blanco Cónico","stock":20,"precio":"$7.500","material":"Cerámica gres","info":"Alto: 14,5 cm\nDiámetro general: 11,5 cm\nMaterialidad: Cerámica gres.\nEntrega: 15 días hábiles."},
{"id":6,"categoria":"macetas","producto":"Florero Trazo Negro Cónico","stock":15,"precio":"$7.500","material":"Cerámica gres","info":"Alto: 14,5 cm\nDiámetro general: 11,5 cm\nMaterialidad: Cerámica gres."},
{"id":7,"categoria":"macetas","producto":"Florero Trazo Negro","stock":17,"precio":"$7.500","material":"Cerámica gres","info":"Alto: 14 cm\nDiámetro general: 10 cm\nMaterialidad: Cerámica gres."},
{"id":8,"categoria":"cocina","producto":"Lechero Anfibio","stock":3,"precio":"$16.500","material":"Cerámica","info":"Alto: 15 cm\nDiámetro general: 14 cm\nMaterialidad: Cerámica"},
{"id":9,"categoria":"macetas","producto":"Florero Ocre","stock":8,"precio":"$7.500","material":"Cerámica gres","info":"Alto: 14 cm\nDiámetro general: 10 cm\nMaterialidad: Cerámica gres."},
{"id":10,"categoria":"cocina","producto":"Plato Ramal","stock":30,"precio":"$3.750","material":"Cerámica gres","info":"Alto: 2 cm\nDiámetro general: 25 cm\nMaterialidad: Cerámica gres."},
{"id":11,"categoria":"cocina","producto":"Set Cafetera V60 y Tazas Cerámicas","stock":10,"precio":"$12.000","material":"Cerámica gres","info":"Set Cafetera V60 y tazas (2, 4 ,6 u 8).\n\nCafetera V60:\nAlto total: 20 cm\nDiámetro general: 12 cm\n\nTaza Cerámica:\nAlto: 7,5 cm\nDiámetro general: 7 cm."},
{"id":12,"categoria":"cocina","producto":"Set vajilla cerámica","stock":18,"precio":"$16.500","material":"Cerámica gres","info":"Set Vajilla (2, 4 o 6 personas).\nPlato cerámico grande:\nDiámetro general: 25 cm\nAlto: 2 cm\n\nPlato cerámico chico:\nDiámetro general: 20 cm\nAlto: 2 cm\n\nBowl cerámico:\nDiámetro general: 15 cm\nAlto: 8 cm\n\nMaterialidad: Cerámica gres."},
{"id":13,"categoria":"cocina","producto":"Olla Trazo","stock":16,"precio":"$13.650","material":"Cerámica gres","info":"Diámetro general: 18 cm. \nAlto: 6 cm.\nMaterialidad: Cerámica gres."},
{"id":14,"categoria":"hogar","producto":"Vasija Mujer Encinta","stock":14,"precio":"$12.600","material":"Cerámica ahumada","info":"Alto: 21 cm\nDiámetro general: 16 cm\nMaterialidad: Cerámica ahumada\nLa terminación ahumada puede variar debido a la quema manual."},
{"id":15,"categoria":"hogar","producto":"Vasija Narrador","stock":18,"precio":"$12.600","material":"Cerámica ahumada","info":"Alto: 23 cm\nDiámetro general: 13,5 cm\nMaterialidad: Cerámica ahumada\nLa terminación ahumada puede variar debido a la quema manual."},
{"id":16,"categoria":"cocina","producto":"Plato Blanco","stock":72,"precio":"$5.400","material":"Cerámica","info":"Alto: 2,5 cm\nDiámetro: 24,5 cm\nMaterialidad: Cerámica"},
{"id":17,"categoria":"cocina","producto":"Plato Hondo","stock":80,"precio":"$5.400","material":"Cerámica","info":"Alto: 5,5 cm\nDiámetro: 20 cm\nMaterialidad: Cerámica"},
{"id":18,"categoria":"hogar","producto":"Frutero","stock":12,"precio":"$36.000","material":"Madera de Raulí y Bron","info":"Alto: 16 cm\nDiámetro: 31 cm\nMaterialidad: Bronce pulido, fierro electro esmaltado y madera de Raulí."},
{"id":19,"categoria":"macetas","producto":"Florero-Espino","stock":3,"precio":"$7.500","material":"Madera de espino","info":"Diámetro: Ø10 cm\nAlto: 13 cm\nMaterialidad: Madera de espino (sellados para contener agua)"},
{"id":20,"categoria":"deco","producto":"Colgante Bronce Luna","stock":5,"precio":"$12.600","material":"Bronce","info":"Alto: 40 cm\nAncho: 14 cm\nMaterialidad: Bronce "},
{"id":21,"categoria":"deco","producto":"Colgante Bronce Fases","stock":8,"precio":"$12.600","material":"Bronce","info":"Alto: 52 cm\nAncho: 10 cm\nMaterialidad: Bronce"},
{"id":22,"categoria":"deco","producto":"Espejo de Muro - 39x60cm","stock":2,"precio":"$25.950","material":"Vidrio y madera de espino","info":"Material: Espejo de muro bronceado con madera de espino, cosecha 2019.\nEspesor Espejo: 4 mm."},
{"id":23,"categoria":"deco","producto":"Espejo de Muro 2 - 20x22cm","stock":3,"precio":"$16.650","material":"Vidrio y madera de espino","info":"\nAlto: 22 cm\nAncho: 20 cm\nProfundidad: 10 cm\nMaterial: Espejo de muro bronceado con madera de espino, cosecha 2019.\nEspesor Espejo: 4 mm."},
{"id":24,"categoria":"hogar","producto":"Set de 3 perchas línea","stock":12,"precio":"$10.200","material":"Madera de espino","info":"Alto: 9 cm\nAncho: 3 cm\nProfundidad: 6 cm\nMaterialidad: Madera de espino"},
{"id":25,"categoria":"hogar","producto":"Set de 3 perchas punto","stock":19,"precio":"$10.200","material":"Madera de espino","info":""},
{"id":26,"categoria":"deco","producto":"Set de Cuencos IWE","stock":16,"precio":"$21.600","material":"Madera de Mañío","info":"Diámetro general: Ø6 cm (x1)\nDiámetro general: Ø7 cm (x1)\nDiámetro general: Ø8 cm (x1)\nMaterialidad: Madera de espino"},
{"id":27,"categoria":"velas","producto":"Set Velas Monedones Cobre","stock":100,"precio":"$9.000","material":"Cera y hormigón","info":"Set 3 piezas \nDiámetro: 10,5 cm c/u\nAlto: 5 cm c/u\nMaterialidad: Cera y hormigón terminación cobre."},
{"id":28,"categoria":"velas","producto":"Set Velas Moneda","stock":90,"precio":"$4.200","material":"Cera y hormigón","info":"Set 3 piezas \nDiámetro: 7 cm c/u\nAlto: 5 cm c/u\nMaterialidad: Cera y hormigón."},
{"id":29,"categoria":"hogar","producto":"Repisa A","stock":4,"precio":"$39.000","material":"Madera de lenga y vidrio","info":"Largo: 78 cm.\nAlto: 50 cm.\nProfundidad: 14 cm.\nMaterialidad: Madera de Lenga junto con Espejo Incoloro de 4 mm."},
{"id":30,"categoria":"hogar","producto":"Repisa B","stock":7,"precio":"$39.000","material":"Madera de lenga y vidrio","info":"Largo: 70 cm.\nAlto: 50 cm.\nProfundidad: 14 cm.\nMaterialidad: Madera de Lenga junto con Espejo Incoloro de 4 mm."},
{"id":31,"categoria":"velas","producto":"Candelero Shaku x2","stock":32,"precio":"$4.200","material":"Madera de Raulí y cobre","info":"Alto: 15 cm\nDiámetro: 8 cm\nMaterialidad: Madera de Raulí y inserto de cobre.\nVelas diámetro estándar (2,3 cm)"},
{"id":32,"categoria":"hogar","producto":"Alfombra 120cm","stock":2,"precio":"$99.000","material":"Lana y gabardina","info":"Alfombra con relieve\nDiámetro: 120 cm\nMaterialidad: 100% lana nacional, reverso de gabardina y cinta espiga ambas de algodón."},
{"id":33,"categoria":"hogar","producto":"Alfombra 120cm ","stock":3,"precio":"$132.000","material":"Lana y gabardina","info":"Largo: 160 cm\nAncho: 120 cm\nMaterialidad: 100% lana nacional, reverso de gabardina y cinta espiga ambas de algodón."},
{"id":34,"categoria":"hogar","producto":"Alfombra 120X160cm","stock":2,"precio":"$132.000","material":"Lana y gabardina","info":"Largo: 160 cm\nAncho: 120 cm\nMaterialidad: 100% lana nacional, reverso de gabardina y cinta espiga ambas de algodón."},
{"id":35,"categoria":"hogar","producto":"Alfombra 120X160cm","stock":0,"precio":"$132.000","material":"Lana y gabardina","info":"Largo: 160 cm\nAncho: 120 cm\nMaterialidad: 100% lana nacional, reverso de gabardina y cinta espiga ambas de algodón."},
{"id":36,"categoria":"hogar","producto":"Alfombra 120X160cm","stock":1,"precio":"$132.000","material":"Lana y gabardina","info":"Largo: 160 cm\nAncho: 120 cm\nMaterialidad: 100% lana nacional, reverso de gabardina y cinta espiga ambas de algodón."},
{"id":37,"categoria":"iluminacion","producto":"Lampara Ruca Cielo Blanca","stock":4,"precio":"$29.100","material":"Cerámica","info":"antalla\nAlto: 26 cm\nDiámetro general: 20 cm\nMaterialidad:  Pantalla en papel cerámico y cable textil trenzado negro (130 cm).\n*No incluye tapa de techo (se vende por separado)."},
{"id":38,"categoria":"iluminacion","producto":"Lámpara Ícono","stock":12,"precio":"$15.300","material":"Cemento y Acero","info":""},
{"id":39,"categoria":"iluminacion","producto":"Lámpara Miscanti","stock":1,"precio":"$76.800","material":"Madera de lenga","info":"Alto: 9 cm\nLargo: 115, 140 o 160 cm\nAncho: 4,5 cm \nMaterialidad: Madera de lenga, cable transparente y tensores de acero.\nBaldequín blanco 8mm + cable transparente 1,20 mt (a un costado)\nIncluye Cinta Led cálida 3000k - consumo 22w - luminosidad 5.930 lúmenes - ángulo 120°\nHabilitada para dimmers de muro."},
{"id":40,"categoria":"iluminacion","producto":"Lámpara Llaima","stock":2,"precio":"$24.000","material":"Raulí y pino","info":"Alto: 21 cm\nDiámetro general: 30 cm\nMaterialidad: Raulí y pino, cable textil blanco.\nNo incluye lámpara."},
{"id":41,"categoria":"iluminacion","producto":"Lámpara Paranicota","stock":7,"precio":"$9.600","material":"Madera de pino","info":"Alto: 11 cm\nDiámetro general: 7,5 cm\n\nNo incluye lámpara"},
{"id":42,"categoria":"iluminacion","producto":"Lámpara de colgar A","stock":6,"precio":"$28.800","material":"Madera de espino","info":"*Incluye ampolleta LED\nAlto total con lampara: 18 cm\nAncho: 10 cm\nLargo: 10 cm\nSoquete: E27\nLargo del Cable: 1,3 mts\nMaterial: Madera de espino, cosecha 2019."},
{"id":43,"categoria":"iluminacion","producto":"Lámpara de mesa A","stock":4,"precio":"$32.700","material":"Madera de espino","info":"*Incluye ampolleta LED\nAlto total con lámpara: 22 cm\nAncho: 10 cm\nLargo: 10 cm\nSoquete: E27\nLargo del Cable: 2 mts\nMaterial: Madera de espino, cosecha 2019."},
{"id":44,"categoria":"iluminacion","producto":"Lámpara de colgar B","stock":3,"precio":"$28.800","material":"Madera de espino","info":"*Incluye ampolleta LED\nAlto total con lampara: 20 cm\nAncho: 10 cm\nLargo: 10 cm\nSoquete: E27\nLargo del Cable: 1,3 mts\nMaterial: Madera de espino, cosecha 2019."},
{"id":45,"categoria":"iluminacion","producto":"Lámpara de mesa B","stock":3,"precio":"$32.700","material":"Madera de espino","info":"*Incluye ampolleta LED\nAlto total con lampara: 21 cm\nLargo: 13 cm\nAncho: 10 cm\nSoquete: E27\nLargo del Cable: 2 mts\nMaterial: Madera de espino, cosecha 2019."}]

export default products;