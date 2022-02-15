(function() {
    inputs = document.getElementsByTagName('input');
    
    for(index=0; index < inputs.length; ++index) {
        inputs[index].value='foo';
    }
})();
