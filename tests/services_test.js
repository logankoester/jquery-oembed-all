module("Known services tests", {
    setup: function() {
        this.template = '<a href="[url]" class="oembed">[url]</a>';
    }
});

asyncTest("Vimeo url", function() {
    expect(2);
    var testElement = document.createElement('div');
        document.body.appendChild(testElement);

    var url = "https://vimeo.com/104167125",
        handleSuccess = function() {
            var iframe = testElement.querySelector('iframe');
            ok(iframe, "Iframe is created");
            equal(iframe.getAttribute('src').indexOf("//player.vimeo.com/video/104167125"), 0, "Iframe embed url is correct");
            start();
            end();
        }.bind(this),
        handleError = function(data) {
            ok(false, "Service unavailable");
            start();
            end();
        }.bind(this),
        end = function() {
            document.body.removeChild(testElement);
        };

    testElement.innerHTML = this.template.replace(/\[url\]/g, url);

    $(testElement.querySelector('.oembed')).oembed(null,{
        apikeys: {
            amazon : 'caterwall-20'
        },
        afterEmbed: handleSuccess
    });
});

asyncTest("Youtube basic url", function() {
    expect(2);
    var testElement = document.createElement('div');
        document.body.appendChild(testElement);

    var url = "https://www.youtube.com/watch?v=C0DPdy98e4c",
        handleSuccess = function() {
            var iframe = testElement.querySelector('iframe');
            ok(iframe, "Iframe is created");
            equal(iframe.getAttribute('src').indexOf("https://www.youtube.com/embed/C0DPdy98e4c?wmode=transparent"), 0, "Iframe embed url is correct");
            start();
            end();
        }.bind(this),
        end = function() {
            document.body.removeChild(testElement);
        };

    testElement.innerHTML = this.template.replace(/\[url\]/g, url);

    $(testElement.querySelector('.oembed')).oembed(null,{
        apikeys: {
            amazon : 'caterwall-20'
        },
        afterEmbed: handleSuccess
    });
});

asyncTest("Youtube short url", function() {
    expect(2);
    var testElement = document.createElement('div');
        document.body.appendChild(testElement);

    var url = "http://youtu.be/C0DPdy98e4c",
        handleSuccess = function() {
            var iframe = testElement.querySelector('iframe');
            ok(iframe, "Iframe is created");
            equal(iframe.getAttribute('src').indexOf("https://www.youtube.com/embed/C0DPdy98e4c?wmode=transparent"), 0, "Iframe embed url is correct");
            start();
            end();
        }.bind(this),
        end = function() {
            document.body.removeChild(testElement);
        };

    testElement.innerHTML = this.template.replace(/\[url\]/g, url);

    $(testElement.querySelector('.oembed')).oembed(null,{
        apikeys: {
            amazon : 'caterwall-20'
        },
        afterEmbed: handleSuccess
    });
});



