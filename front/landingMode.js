define(function () {

    var mode = "metalTail";

    var modes = {
        metalTail: "metalTail",
        sofit: "sofit",
        gutter: "gutter",
        insulation: "insulation",
        profnastil: "profnastil",
        additionalElements: "additionalElements",
        foldedRoof: "foldedRoof",
        fence: "fence",
        siding: "siding",
        watering: "watering",
    };

    return {
        setMode: function (newMode) {
            mode = newMode;
        },
        getMode: function () {
            return mode;
        },
        modes: modes
    }
});