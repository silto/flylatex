var editor = ace.edit("editor");

// ============ Ace editor configurations here =============
// configure the editor here
editor.setReadOnly(true); // set to false initially though
editor.setFontSize(14);
editor.getSession().setUseSoftTabs(true);
editor.getSession().setTabSize(2);
editor.getSession().setOption("wrap", 80);


// use latex mode
var LatexMode = require("ace/mode/latex").Mode;
editor.getSession().setMode(new LatexMode());

// use idle_fingers theme
editor.setTheme("ace/theme/dreamweaver");

var defaultText =   "==> You haven't loaded any document yet. "
  + "\nYou should click on the document you want to load."
  + "\nOr you should create a new document if you have none yet";
editor.setValue(defaultText);
// ============ End of Ace editor configurations here =========
