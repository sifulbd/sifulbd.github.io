function easyHTTP() {
    this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
    const self = this.http;
    self.onload = function() {
        if(self.status === 200) {
           callback(self.responseText);
        }else {
            callback("Error". self.status);
        }
    }

    this.http.send();
}