$('#product_tags').selectize({
    delimiter: ',',
    maxItems: 3,
    persist: false,
    create: function(input) {
        return {
            value: input,
            text: input
        }
    }
});
