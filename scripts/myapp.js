(function () {

    window.myapp = window.myapp || {};

    window.onload = function () {

        var myapp = window.myapp,
            username = "ramirocartodb",
            mapname = "How to change CARTO dashboard sidebar style",
            diJSON = "https://team.carto.com/u/ramirocartodb/api/v3/viz/5756a1f4-5ee8-11e6-8762-0e3ebc282e83/viz.json";

        cartodb.deepInsights.createDashboard('#dashboard', diJSON, {
            no_cdn: false
        }, function (err, dashboard) {

          cdb.$('#physical').click(function() {
            cdb.$('.CDB-Dashboard-menuInner').css({'background-image':"url('themes/img/physical.png')"})
          });

          cdb.$('#elections').click(function() {
            cdb.$('.CDB-Dashboard-menuInner').css({'background-image':"url('themes/img/elections.png')"})
          });

          cdb.$('#historical').click(function() {
            cdb.$('.CDB-Dashboard-menuInner').css({'background':"url('themes/img/historical.jpg')"})
          });

          cdb.$('#default').click(function() {
            cdb.$('.CDB-Dashboard-menuInner').css({'background': '#3AA9E3'})
          });

        });

    }

})();
