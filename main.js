$(function () {
    'use strict';

    var PostBoxView = Backbone.View.extend({

        // Create a template function using Handlebars.js.
        // See http://handlebarsjs.com/.
        template: Handlebars.compile($('#post-box-tmpl').html().trim()),

        events: {
            // Whenenever the user clicks on the text area we will add an `expanded`
            // class to the `textarea-wrapper` div.
            'click textarea': function () { this.$('.textarea-wrapper').addClass('expanded'); },

            // Whenever the user clicks on the submit button we will set the model's
            // `text` attribute to whatever the user entered into the `textarea` element.
            // 'click .textarea-wrapper button': function () { this.model.set('text', this.$('textarea').val()); },
            'click .textarea-wrapper button': function () { this.$('.textarea-wrapper button').addClass('success'); }
            
        },

        initialize: function () {

            // Create a blank view-model. We'll use this to respond save state
            // whenever the UI changes. See http://addyosmani.com/blog/understanding-mvvm-a-guide-for-javascript-developers/
            // for more context about view-models.
            this.model = new Backbone.Model();

            // Whenever the model's attribute change, we will re-render the entire
            // post box view. This happens automatically using Backbone's event
            // callback infastructure http://backbonejs.org/#Events.
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            console.log('Rendering the post box.');

            // Pass the model's attribute to the post box template.
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

    var postBox = new PostBoxView();
    $('#main').html(postBox.render().el);
});
