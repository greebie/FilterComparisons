var s = new sigma('cppdegree');
var s2 = new sigma('cppbetween');
var s3 = new sigma('cppeigen');
var s4 = new sigma('cppauthority');
var so = new sigma('cpp');
sigma.parsers.gexf(
  'GEXF/cpp2.gexf',
  so,
  function(y) {
  so.refresh();
  }
);
sigma.parsers.gexf(
    'GEXF/cpp225Degree.gexf',
    s,
    function(y) {
    s.refresh();
    }
  );

sigma.parsers.gexf(
      'GEXF/cpp225Betweenness.gexf',
      s2,
      function(y) {
      s2.refresh();
      }
    );

sigma.parsers.gexf(
        'GEXF/cpp225Eigenvector.gexf',
        s3,
        function(y) {
        s3.refresh();
        }
      );

sigma.parsers.gexf(
          'GEXF/cpp225Authority.gexf',
          s4,
          function(y) {
          s4.refresh();
          }
        );

  // Refresh the graph to see the changes:
