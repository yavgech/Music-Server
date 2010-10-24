/*******************************************************************************
* Copyright (c) 2010 Richard Backhouse
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*******************************************************************************/
(function() {
dojo.provide("org.potpie.musicserver.web.handlers.WebContext");

dojo.declare("org.potpie.musicserver.web.handlers.WebContext", null, {	
    templatePath: dojo.moduleUrl("org.potpie.musicserver.web", "web.dtl"),
	
	constructor: function(args, request) {
		this.request = request;
		var contextRootHolder = dojox.serverdtl.util.invokeCallback(contextRoot, "{}");
		this.contextRoot = contextRootHolder.contextRoot;
		this.dojoUrl = this.contextRoot + "/dojo/";
		var volumeHolder = dojox.serverdtl.util.invokeCallback(getVolume, "{}");
		this.currentVolume = volumeHolder.volume;
		var stateHolder = dojox.serverdtl.util.invokeCallback(getPlayerState, "{}");
		this.currentState = 1;
		if (stateHolder.currentState === "PLAYING") {
			this.currentState = 2;
		} else if (stateHolder.currentState === "PAUSED") {
			this.currentState = 3;
		}
    },

	getStatus: function() {
		return 200;
	},
	
	getResponseHeaders: function() {
		return {"content-type" : "text/html"};
	}
});
})();