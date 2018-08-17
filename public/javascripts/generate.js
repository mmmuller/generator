if (!window.generatory) {
    window.generatory = {};
}

window.generatory.generate = function (type) {
    $.get("/api/" + type, function (data) {
        $("#result").val(data);
    });
};