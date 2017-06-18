// Change divs based on position selection
var Privileges = jQuery('#position');
var select = this.value;
Privileges.change(function() {
    if ($(this).val() == 'developer') {
        $('.developer-form').fadeIn();
        $('.calculate-results').hide();
        $("#devForm")[0].reset();
        $('.select-skills').val('').trigger('chosen:updated');
        $('.main-form fieldset.initial-step').fadeIn('slow');
        $('.main-form fieldset.other-steps').hide();
    } else $('.developer-form').hide();

    if ($(this).val() == 'designer') {
        $('.designer-form').fadeIn();
        $('.calculate-results').hide();
        $("#desForm")[0].reset();
        $('.select-skills').val('').trigger('chosen:updated');
        $('.main-form fieldset.initial-step').fadeIn('slow');
        $('.main-form fieldset.other-steps').hide();
    } else $('.designer-form').hide();

    if ($(this).val() == 'va') {
        $('.va-form').fadeIn();
        $('.calculate-results').hide();
        $("#vaForm")[0].reset();
        $('.main-form fieldset.initial-step').fadeIn('slow');
        $('.main-form fieldset.other-steps').hide();
    } else $('.va-form').hide();
});

// Chosen selection box
$(".select-position").chosen();
$(".select-skills").chosen();

// Validate form (developer skills)
var $form = $('#devForm');
$('.req-btn').click(function() {
    var parent_fieldset = $(this).parents('fieldset');
    var next_step = true;

    if ($form.parsley().validate()) {
        next_step = true;
    } else {
        next_step = false;
    }

    if (next_step) {
        parent_fieldset.fadeOut(400, function() {
            $(this).next().fadeIn();
        });
    }
});

// The initial launch of the form
$('.main-form fieldset:first-child').fadeIn('slow');

// Next step
$('.main-form .next').on('click', function() {
    var parent_fieldset = $(this).parents('fieldset');
    var next_step = true;

    if (next_step) {
        parent_fieldset.fadeOut(400, function() {
            $(this).next().fadeIn();
        });
    }
});

// Previous step
$('.main-form .previous').on('click', function() {
    $(this).parents('fieldset').fadeOut(400, function() {
        $(this).prev().fadeIn();
    });
});

// Submit form button
$('.main-form .yellow-btn').on('click', function() {
    $('.calculate-results').fadeIn();
});

// Hide results
$('.main-form .previous').on('click', function() {
    $('.calculate-results').hide();
});

// Smooth scrolling when yellow button is clicked
$(document).on('click', 'a.calc-btn', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
