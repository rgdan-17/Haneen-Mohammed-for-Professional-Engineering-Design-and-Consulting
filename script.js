function calculate() {
    const area = document.getElementById("area").value;
    let costPerMeter, initialIdeasDays, threeDDesignDays, executionDays, totalDays;

    if (area > 400) {
        costPerMeter = 32;
        initialIdeasDays = 30;
        threeDDesignDays = 30;
        executionDays = 30;
        totalDays = 90;
    } else if (area > 250) {
        costPerMeter = 35;
        initialIdeasDays = 15;
        threeDDesignDays = 30;
        executionDays = 30;
        totalDays = 75;
    } else if (area > 150) {
        costPerMeter = 40;
        initialIdeasDays = 15;
        threeDDesignDays = 15;
        executionDays = 30;
        totalDays = 60;
    } else if (area > 100) {
        costPerMeter = 45;
        initialIdeasDays = 15;
        threeDDesignDays = 15;
        executionDays = 15;
        totalDays = 45;
    } else if (area > 50) {
        costPerMeter = 55;
        initialIdeasDays = 5;
        threeDDesignDays = 10;
        executionDays = 5;
        totalDays = 20;
    } else if (area > 10) {
        costPerMeter = 60;
        initialIdeasDays = 5;
        threeDDesignDays = 5;
        executionDays = 5;
        totalDays = 15;
    } else {
        costPerMeter = 120;
        initialIdeasDays = 10; // يتم شمل جميع المراحل في 10 أيام
        threeDDesignDays = 0;
        executionDays = 0;
        totalDays = 10;
    }

    const totalCost = area * costPerMeter;

    document.getElementById("totalCost").innerText = totalCost + " ريال سعودي";
    document.getElementById("initialIdeas").innerText = initialIdeasDays + " يوم";
    document.getElementById("threeDDesign").innerText = threeDDesignDays > 0 ? threeDDesignDays + " يوم" : "-";
    document.getElementById("totalDays").innerText = totalDays + " يوم";
}
