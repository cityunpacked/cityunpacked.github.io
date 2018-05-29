var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_run_1_0 = new ol.format.GeoJSON();
var features_run_1_0 = format_run_1_0.readFeatures(json_run_1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_run_1_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_run_1_0.addFeatures(features_run_1_0);var lyr_run_1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_run_1_0, 
                style: style_run_1_0,
                title: '<img src="styles/legend/run_1_0.png" /> run_1'
            });var format_run_2_1 = new ol.format.GeoJSON();
var features_run_2_1 = format_run_2_1.readFeatures(json_run_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_run_2_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_run_2_1.addFeatures(features_run_2_1);var lyr_run_2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_run_2_1, 
                style: style_run_2_1,
                title: '<img src="styles/legend/run_2_1.png" /> run_2'
            });var format_run_3_2 = new ol.format.GeoJSON();
var features_run_3_2 = format_run_3_2.readFeatures(json_run_3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_run_3_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_run_3_2.addFeatures(features_run_3_2);var lyr_run_3_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_run_3_2, 
                style: style_run_3_2,
                title: '<img src="styles/legend/run_3_2.png" /> run_3'
            });var format_run_4_3 = new ol.format.GeoJSON();
var features_run_4_3 = format_run_4_3.readFeatures(json_run_4_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_run_4_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_run_4_3.addFeatures(features_run_4_3);var lyr_run_4_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_run_4_3, 
                style: style_run_4_3,
                title: '<img src="styles/legend/run_4_3.png" /> run_4'
            });var format_run_5_4 = new ol.format.GeoJSON();
var features_run_5_4 = format_run_5_4.readFeatures(json_run_5_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_run_5_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_run_5_4.addFeatures(features_run_5_4);var lyr_run_5_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_run_5_4, 
                style: style_run_5_4,
                title: '<img src="styles/legend/run_5_4.png" /> run_5'
            });var format_run_6_5 = new ol.format.GeoJSON();
var features_run_6_5 = format_run_6_5.readFeatures(json_run_6_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_run_6_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_run_6_5.addFeatures(features_run_6_5);var lyr_run_6_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_run_6_5, 
                style: style_run_6_5,
                title: '<img src="styles/legend/run_6_5.png" /> run_6'
            });var format_run_7_6 = new ol.format.GeoJSON();
var features_run_7_6 = format_run_7_6.readFeatures(json_run_7_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_run_7_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_run_7_6.addFeatures(features_run_7_6);var lyr_run_7_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_run_7_6, 
                style: style_run_7_6,
                title: '<img src="styles/legend/run_7_6.png" /> run_7'
            });var format_run_8_7 = new ol.format.GeoJSON();
var features_run_8_7 = format_run_8_7.readFeatures(json_run_8_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_run_8_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_run_8_7.addFeatures(features_run_8_7);var lyr_run_8_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_run_8_7, 
                style: style_run_8_7,
                title: '<img src="styles/legend/run_8_7.png" /> run_8'
            });var format_run_9_8 = new ol.format.GeoJSON();
var features_run_9_8 = format_run_9_8.readFeatures(json_run_9_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_run_9_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_run_9_8.addFeatures(features_run_9_8);var lyr_run_9_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_run_9_8, 
                style: style_run_9_8,
                title: '<img src="styles/legend/run_9_8.png" /> run_9'
            });var format_run_10_9 = new ol.format.GeoJSON();
var features_run_10_9 = format_run_10_9.readFeatures(json_run_10_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_run_10_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_run_10_9.addFeatures(features_run_10_9);var lyr_run_10_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_run_10_9, 
                style: style_run_10_9,
                title: '<img src="styles/legend/run_10_9.png" /> run_10'
            });var format_run_11_10 = new ol.format.GeoJSON();
var features_run_11_10 = format_run_11_10.readFeatures(json_run_11_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_run_11_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_run_11_10.addFeatures(features_run_11_10);var lyr_run_11_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_run_11_10, 
                style: style_run_11_10,
                title: '<img src="styles/legend/run_11_10.png" /> run_11'
            });var format_run_12_11 = new ol.format.GeoJSON();
var features_run_12_11 = format_run_12_11.readFeatures(json_run_12_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_run_12_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_run_12_11.addFeatures(features_run_12_11);var lyr_run_12_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_run_12_11, 
                style: style_run_12_11,
                title: '<img src="styles/legend/run_12_11.png" /> run_12'
            });var format_run_13_12 = new ol.format.GeoJSON();
var features_run_13_12 = format_run_13_12.readFeatures(json_run_13_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_run_13_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_run_13_12.addFeatures(features_run_13_12);var lyr_run_13_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_run_13_12, 
                style: style_run_13_12,
                title: '<img src="styles/legend/run_13_12.png" /> run_13'
            });var format_run_14_13 = new ol.format.GeoJSON();
var features_run_14_13 = format_run_14_13.readFeatures(json_run_14_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_run_14_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_run_14_13.addFeatures(features_run_14_13);var lyr_run_14_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_run_14_13, 
                style: style_run_14_13,
                title: '<img src="styles/legend/run_14_13.png" /> run_14'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_run_1_0,lyr_run_2_1,lyr_run_3_2,lyr_run_4_3,lyr_run_5_4,lyr_run_6_5,lyr_run_7_6,lyr_run_8_7,lyr_run_9_8,lyr_run_10_9,lyr_run_11_10,lyr_run_12_11,lyr_run_13_12,lyr_run_14_13,],
                                title: "group1"});

lyr_run_1_0.setVisible(true);lyr_run_2_1.setVisible(true);lyr_run_3_2.setVisible(true);lyr_run_4_3.setVisible(true);lyr_run_5_4.setVisible(true);lyr_run_6_5.setVisible(true);lyr_run_7_6.setVisible(true);lyr_run_8_7.setVisible(true);lyr_run_9_8.setVisible(true);lyr_run_10_9.setVisible(true);lyr_run_11_10.setVisible(true);lyr_run_12_11.setVisible(true);lyr_run_13_12.setVisible(true);lyr_run_14_13.setVisible(true);
var layersList = [baseLayer,group_group1];
lyr_run_1_0.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_run_2_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_run_3_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_run_4_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_run_5_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_run_6_5.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_run_7_6.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_run_8_7.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_run_9_8.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_run_10_9.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_run_11_10.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_run_12_11.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_run_13_12.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_run_14_13.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_run_1_0.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_run_2_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_run_3_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_run_4_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_run_5_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_run_6_5.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_run_7_6.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_run_8_7.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_run_9_8.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_run_10_9.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_run_11_10.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_run_12_11.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_run_13_12.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_run_14_13.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_run_1_0.set('fieldLabels', {});
lyr_run_2_1.set('fieldLabels', {});
lyr_run_3_2.set('fieldLabels', {});
lyr_run_4_3.set('fieldLabels', {});
lyr_run_5_4.set('fieldLabels', {});
lyr_run_6_5.set('fieldLabels', {});
lyr_run_7_6.set('fieldLabels', {});
lyr_run_8_7.set('fieldLabels', {});
lyr_run_9_8.set('fieldLabels', {});
lyr_run_10_9.set('fieldLabels', {});
lyr_run_11_10.set('fieldLabels', {});
lyr_run_12_11.set('fieldLabels', {});
lyr_run_13_12.set('fieldLabels', {});
lyr_run_14_13.set('fieldLabels', {});
lyr_run_14_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});