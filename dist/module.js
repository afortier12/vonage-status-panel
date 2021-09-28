'use strict';

System.register([], function (_export2, _context2) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      System.register(['./status_ctrl'], function (_export, _context) {
        "use strict";

        var StatusPluginCtrl;
        return {
          setters: [function (_status_ctrl) {
            StatusPluginCtrl = _status_ctrl.StatusPluginCtrl;
          }],
          execute: function execute() {
            _export('PanelCtrl', StatusPluginCtrl);
          }
        };
      });
      //# sourceMappingURL=module.js.map
    }
  };
});
//# sourceMappingURL=module.js.map
