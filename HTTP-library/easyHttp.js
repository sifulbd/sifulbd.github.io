function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// GET
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
    let self = this.http;
    // 
    self.onload = function() {
        const responseTxt = JSON.parse(self.responseText);
        if(self.status === 200) {
           callback(null, responseTxt);
        }else {
            callback("Error". self.status);
        }
    }  

    this.http.send();
} 

// Text 


// POST

easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this.http;
    self.onload = function() {
        callback(null, self.responseText);
    }

    self.send(JSON.stringify(data));
}


// PUT

easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this.http;
    self.onload = function() {
        callback(null, self.responseText);
    }

    self.send(JSON.stringify(data));
}

// Delete

easyHTTP.prototype.delete = function(url, callback) { 
    this.http.open('DELETE', url, true);
    let self = this.http;
    // 
    self.onload = function() {
        const responseTxt = JSON.parse(self.responseText);
        if(self.status === 200) {
           callback(null, 'Post Deleted');
        }else {
            callback("Error". self.status);
        }
    }  

    this.http.send();
} 