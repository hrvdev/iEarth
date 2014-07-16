var PolylinePrimitive = (function() {
      
    function _(options) {

        options = utils.copyOptions(options, Default.defaultSurfaceOptions);

        this.initialiseOptions(options);

    }

    _.prototype = new ChangeablePrimitive();

    _.prototype.setPositions = function(positions) {
        this.setAttribute('positions', positions);
    };

    _.prototype.setWidth = function(width) {
        this.setAttribute('width', width);
    };

    _.prototype.setGeodesic = function(geodesic) {
        this.setAttribute('geodesic', geodesic);
    };

    _.prototype.setOutlineProperty = function(material) {
        this.setAttribute('material', material);
    };

    _.prototype.getPositions = function() {
        return this.getAttribute('positions');
    };

    _.prototype.getWidth = function() {
        return this.getAttribute('width');
    };

    _.prototype.getGeodesic = function(geodesic) {
        return this.getAttribute('geodesic');
    };

    _.prototype.getGeometry = function() {
      
        if (!Cesium.defined(this.positions) || this.positions.length < 2) {
            return;
        }

        return new Cesium.PolylineGeometry({
                positions: this.geodesic ? utils.getGeodesicPath(this.positions, Math.max(this.granularity, 50000)) : this.positions,
                height : this.height,
                width: this.width < 1 ? 1 : this.width,
                vertexFormat : Cesium.PolylineMaterialAppearance.VERTEX_FORMAT,
                ellipsoid : this.ellipsoid
            });
    };

    _.prototype.getExtent = function(){
        return Cesium.Extent.fromCartographicArray(this.ellipsoid.cartesianArrayToCartographicArray(this.getPositions()));
    };
    
    return _;
})();
