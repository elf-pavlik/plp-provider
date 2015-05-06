(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['event.hbs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "        <h1 property=\"name\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "        <img property=\"image\" src=\""
    + this.escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" />\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "      <div class=\"col-md-6\">\n        <p property=\"description\">"
    + this.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n      </div>\n";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "          <li>\n            <span class=\"glyphicon glyphicon-cloud-download\"></span>\n            <span property=\"birthDate\">"
    + this.escapeExpression(((helper = (helper = helpers.birthDate || (depth0 != null ? depth0.birthDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"birthDate","hash":{},"data":data}) : helper)))
    + "</span>\n          </li>\n";
},"9":function(depth0,helpers,partials,data) {
    var helper;

  return "          <li>\n            <span class=\"glyphicon glyphicon-forward\"></span>\n            <span property=\"birthDate\">"
    + this.escapeExpression(((helper = (helper = helpers.birthDayParty || (depth0 != null ? depth0.birthDayParty : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"birthDayParty","hash":{},"data":data}) : helper)))
    + "</span>\n            <span class=\"glyphicon glyphicon-fire\"></span>\n          </li>\n";
},"11":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return "          <li rel=\"homeLocation\">\n            <a typeof=\""
    + alias1((helpers.j || (depth0 && depth0.j) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.homeLocation : depth0)) != null ? stack1.type : stack1),{"name":"j","hash":{},"data":data}))
    + "\" href=\""
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.homeLocation : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n              <span property=\"name\">"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.homeLocation : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span>\n            </a>\n          </li>\n";
},"13":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return "          <li rel=\"currentLocation\">\n            <a typeof=\""
    + alias1((helpers.j || (depth0 && depth0.j) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.currentLocation : depth0)) != null ? stack1.type : stack1),{"name":"j","hash":{},"data":data}))
    + "\" href=\""
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.currentLocation : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n              <span property=\"name\">"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.currentLocation : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span>\n            </a>\n          </li>\n";
},"15":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <ul>\n          <li><span class=\"glyphicon glyphicon-certificate\"></span></li>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0['sec:publicKey'] : depth0),{"name":"each","hash":{},"fn":this.program(16, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n";
},"16":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <li>\n            <a property=\"sec:publicKey\" href=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span property=\"name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span></a>\n          </li>\n";
},"18":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <ul>\n          <li><span class=\"glyphicon glyphicon-comment\"></span></li>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.contactPoint : depth0),{"name":"each","hash":{},"fn":this.program(19, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n";
},"19":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "          <li>\n            <a rel=\"me\" property=\"contactPoint\" typeof=\""
    + alias2((helpers.j || (depth0 && depth0.j) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"j","hash":{},"data":data}))
    + "\" href=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span property=\"name\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span></a>\n          </li>\n";
},"21":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <ul>\n          <li><span class=\"glyphicon glyphicon-user\"></span></li>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.sameAs : depth0),{"name":"each","hash":{},"fn":this.program(22, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n";
},"22":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <li>\n            <a rel=\"me\" property=\"contactPoint\" href=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span property=\"name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span></a>\n          </li>\n";
},"24":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"panel panel-default\">\n          <h2 class=\"panel-heading\">\n            <span class=\"glyphicon glyphicon-repeat\"></span>\n            habits\n          </h2>\n          <ul rel=\"cco:habit\" class=\"panel-body\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0['cco:habit'] : depth0),{"name":"each","hash":{},"fn":this.program(25, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n";
},"25":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return "            <li typeof=\""
    + alias1((helpers.j || (depth0 && depth0.j) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"j","hash":{},"data":data}))
    + "\">\n              <a rel=\"cco:topic\" href=\""
    + alias1(alias2(((stack1 = (depth0 != null ? depth0['cco:topic'] : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" target=\"dbpedia\">\n                <span property=\"name\">"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0['cco:topic'] : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span>\n              </a>\n            </li>\n";
},"27":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"panel panel-default\">\n          <h2 class=\"panel-heading\">\n            <span class=\"glyphicon glyphicon-wrench\"></span>\n            projects\n          </h2>\n          <ul rel=\"foaf:currentProject\" class=\"panel-body\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0['foaf:currentProject'] : depth0),{"name":"each","hash":{},"fn":this.program(28, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n";
},"28":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "            <li>\n              <a typeof=\""
    + alias2((helpers.j || (depth0 && depth0.j) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"j","hash":{},"data":data}))
    + "\" href=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span property=\"name\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span></a>\n            </li>\n";
},"30":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"panel panel-default\">\n          <h2 class=\"panel-heading\">\n            <span class=\"glyphicon glyphicon-gift\"></span>\n            wishlist\n          </h2>\n          <ul rel=\"seeks\" class=\"panel-body\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.seeks : depth0),{"name":"each","hash":{},"fn":this.program(31, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n";
},"31":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "            <li typeof=\""
    + alias2((helpers.j || (depth0 && depth0.j) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"j","hash":{},"data":data}))
    + "\">\n              <a property=\"itemOffered\" typeof=\""
    + alias2((helpers.j || (depth0 && depth0.j) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.itemOffered : depth0)) != null ? stack1.type : stack1),{"name":"j","hash":{},"data":data}))
    + "\" href=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.itemOffered : depth0)) != null ? stack1.id : stack1), depth0))
    + "\"><span property=\"name\">"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.itemOffered : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span></a>\n            </li>\n";
},"33":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"panel panel-default\">\n          <h2 class=\"panel-heading\">\n            <span class=\"glyphicon glyphicon-briefcase\"></span>\n            equipment\n          </h2>\n          <ul rel=\"owns\" class=\"panel-body\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.owns : depth0),{"name":"each","hash":{},"fn":this.program(28, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n";
},"35":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"panel panel-default\">\n          <h2 class=\"panel-heading\">\n            <span class=\"glyphicon glyphicon-asterisk\"></span>\n            affiliations\n          </h2>\n          <ul rev=\"member\" class=\"panel-body\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.memberOf : depth0),{"name":"each","hash":{},"fn":this.program(28, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n";
},"37":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"panel panel-default\">\n          <h2 class=\"panel-heading\">\n            <span class=\"glyphicon glyphicon-calendar\"></span>\n            events\n          </h2>\n          <ul rev=\"attendee\" class=\"panel-body\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.attendeeIn : depth0),{"name":"each","hash":{},"fn":this.program(28, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n";
},"39":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"panel panel-default\">\n          <h2 class=\"panel-heading\">\n            <span class=\"glyphicon glyphicon-map-marker\"></span>\n            places\n          </h2>\n          <ul rel=\"visited\" class=\"panel-body\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.visited : depth0),{"name":"each","hash":{},"fn":this.program(28, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n";
},"41":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"panel panel-default\">\n          <h2 class=\"panel-heading\">\n            <span class=\"glyphicon glyphicon-screenshot\"></span>\n            press\n          </h2>\n          <ul rev=\"about\" class=\"panel-body\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subjectOf : depth0),{"name":"each","hash":{},"fn":this.program(42, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n";
},"42":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "            <li>\n              <a typeof=\""
    + alias2((helpers.j || (depth0 && depth0.j) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"j","hash":{},"data":data}))
    + "\" href=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                <span property=\"name\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n                (<span property=\"inLanguage\">"
    + alias2(((helper = (helper = helpers.inLanguage || (depth0 != null ? depth0.inLanguage : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"inLanguage","hash":{},"data":data}) : helper)))
    + "</span>)\n              </a>\n            </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div about=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" typeof=\""
    + alias2((helpers.j || (depth0 && depth0.j) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"j","hash":{},"data":data}))
    + "\" class=\"container\">\n  <div class=\"row\">\n    <div id=\"main\" class=\"col-md-3\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <ul id=\"b-day\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.birthDate : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.birthDate : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n      <ul id=\"geo\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.homeLocation : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.homeLocation : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['sec:publicKey'] : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.contactPoin : depth0),{"name":"if","hash":{},"fn":this.program(18, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.sameAs : depth0),{"name":"if","hash":{},"fn":this.program(21, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['cco:habit'] : depth0),{"name":"if","hash":{},"fn":this.program(24, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"col-md-4\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['foaf:currentProject'] : depth0),{"name":"if","hash":{},"fn":this.program(27, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.seeks : depth0),{"name":"if","hash":{},"fn":this.program(30, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.owns : depth0),{"name":"if","hash":{},"fn":this.program(33, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"col-md-5\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.memberOf : depth0),{"name":"if","hash":{},"fn":this.program(35, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.attendeeIn : depth0),{"name":"if","hash":{},"fn":this.program(37, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.visited : depth0),{"name":"if","hash":{},"fn":this.program(39, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.subjectOf : depth0),{"name":"if","hash":{},"fn":this.program(41, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n  <footer>\n    powered by open source\n    <a typeof=\"SoftwareApplication\" href=\"https://github.com/elf-pavlik/webprofiled\">\n      <span property=\"name\">webprofiled</span>\n    </a>\n  </footer>\n</div>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['event.hbs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "        <h1 property=\"name\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "        <img property=\"image\" src=\""
    + this.escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" />\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "      <div class=\"col-md-6\">\n        <p property=\"description\">"
    + this.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n      </div>\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"panel panel-default\">\n          <h2 class=\"panel-heading\">\n            <span class=\"glyphicon glyphicon-calendar\"></span>\n            present\n          </h2>\n          <ul rel=\"present\" class=\"panel-body\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.present : depth0),{"name":"each","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n";
},"8":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "            <li>\n              <a typeof=\""
    + alias2((helpers.j || (depth0 && depth0.j) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"j","hash":{},"data":data}))
    + "\" href=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span property=\"name\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span></a>\n            </li>\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"panel panel-default\">\n          <h2 class=\"panel-heading\">\n            <span class=\"glyphicon glyphicon-calendar\"></span>\n            attendees\n          </h2>\n          <ul rel=\"attendee\" class=\"panel-body\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.attendee : depth0),{"name":"each","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div about=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" typeof=\""
    + alias2((helpers.j || (depth0 && depth0.j) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"j","hash":{},"data":data}))
    + "\" class=\"container\">\n  <div class=\"row\">\n    <div id=\"main\" class=\"col-md-3\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n    </div>\n    <div class=\"col-md-4\">\n    </div>\n    <div class=\"col-md-5\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.present : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.attendee : depth0),{"name":"if","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n  <footer>\n    powered by open source\n    <a typeof=\"SoftwareApplication\" href=\"https://github.com/elf-pavlik/webprofiled\">\n      <span property=\"name\">webprofiled</span>\n    </a>\n  </footer>\n</div>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['event.hbs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "        <h1 property=\"name\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "        <img property=\"image\" src=\""
    + this.escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" />\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "      <div class=\"col-md-6\">\n        <p property=\"description\">"
    + this.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n      </div>\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"panel panel-default\">\n          <h2 class=\"panel-heading\">\n            <span class=\"glyphicon glyphicon-calendar\"></span>\n            present\n          </h2>\n          <ul rel=\"present\" class=\"panel-body\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.present : depth0),{"name":"each","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n";
},"8":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "            <li>\n              <a typeof=\""
    + alias2((helpers.j || (depth0 && depth0.j) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"j","hash":{},"data":data}))
    + "\" href=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span property=\"name\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span></a>\n            </li>\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"panel panel-default\">\n          <h2 class=\"panel-heading\">\n            <span class=\"glyphicon glyphicon-calendar\"></span>\n            attendees\n          </h2>\n          <ul rel=\"attendee\" class=\"panel-body\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.attendee : depth0),{"name":"each","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div about=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" typeof=\""
    + alias2((helpers.j || (depth0 && depth0.j) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"j","hash":{},"data":data}))
    + "\" class=\"container\">\n  <div class=\"row\">\n    <div id=\"main\" class=\"col-md-3\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n    </div>\n    <div class=\"col-md-4\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.present : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"col-md-5\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.attendee : depth0),{"name":"if","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n  <footer>\n    powered by open source\n    <a typeof=\"SoftwareApplication\" href=\"https://github.com/elf-pavlik/webprofiled\">\n      <span property=\"name\">webprofiled</span>\n    </a>\n  </footer>\n</div>\n";
},"useData":true});
})();
