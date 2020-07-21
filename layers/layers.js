var wms_layers = [];


        var lyr_GooglecnNormal_0 = new ol.layer.Tile({
            'title': 'Google.cn Normal',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_MIC911E09072020_1 = new ol.format.GeoJSON();
var features_MIC911E09072020_1 = format_MIC911E09072020_1.readFeatures(json_MIC911E09072020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MIC911E09072020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MIC911E09072020_1.addFeatures(features_MIC911E09072020_1);
var lyr_MIC911E09072020_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MIC911E09072020_1, 
                style: style_MIC911E09072020_1,
                interactive: true,
                title: '<img src="styles/legend/MIC911E09072020_1.png" /> MI C911E 09-07-2020'
            });

lyr_GooglecnNormal_0.setVisible(true);lyr_MIC911E09072020_1.setVisible(true);
var layersList = [lyr_GooglecnNormal_0,lyr_MIC911E09072020_1];
lyr_MIC911E09072020_1.set('fieldAliases', {'ID TOTEM': 'ID TOTEM', 'PLATAFORMA': 'PLATAFORMA', 'EJE_DE_ACC': 'EJE_DE_ACC', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'C2': 'C2', 'SECTOR': 'SECTOR', 'CALLE': 'CALLE', 'NUMERO EXTERIOR': 'NUMERO EXTERIOR', 'ESQUINA': 'ESQUINA', 'COLONIA': 'COLONIA', 'ALCALDIA': 'ALCALDIA', });
lyr_MIC911E09072020_1.set('fieldImages', {'ID TOTEM': 'TextEdit', 'PLATAFORMA': 'TextEdit', 'EJE_DE_ACC': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'C2': 'TextEdit', 'SECTOR': 'TextEdit', 'CALLE': 'TextEdit', 'NUMERO EXTERIOR': 'TextEdit', 'ESQUINA': 'TextEdit', 'COLONIA': 'TextEdit', 'ALCALDIA': 'TextEdit', });
lyr_MIC911E09072020_1.set('fieldLabels', {'ID TOTEM': 'no label', 'PLATAFORMA': 'no label', 'EJE_DE_ACC': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', 'C2': 'no label', 'SECTOR': 'no label', 'CALLE': 'no label', 'NUMERO EXTERIOR': 'no label', 'ESQUINA': 'no label', 'COLONIA': 'no label', 'ALCALDIA': 'no label', });
lyr_MIC911E09072020_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});