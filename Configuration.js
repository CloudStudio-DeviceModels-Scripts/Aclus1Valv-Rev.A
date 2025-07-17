function getConfiguration(config) {
    // This function allows you to indicate general configuration values
    // for all devices of this model.

    // Depending on the meaning of the "device address" in this device, 
    // you may want to change the label that is used to refer to the 
    // address in the user interface.
    // For instance, if the address of the device is actually a MAC 
    // address, you may want to use the code below.

    config.addressLabel = { en: "DevEUI", es: "DevEUI" };
}

function getEndpoints(deviceAddress, endpoints) {
    
    var t = endpoints.addEndpoint("1", "1 - Temperature sensor", endpointType.temperatureSensor);
        alert = t.addAlert();
        alert.variableTypeId = variableType.temperature;
        alert.conditionType = conditionType.greaterOrEqual;
        alert.threshold = 28;
        alert.normalConditionType = conditionType.lower;
        alert.normalThreshold = 28;
        alert.severity = alarmSeverity.high ;
        alert.notificationEmails = ['valeria.marjovsky@cloud.studio'];
    var e = endpoints.addEndpoint("2", "2 - Flujo", endpointType.genericSensor);
    e.variableTypeId = 1224;
    endpoints.addEndpoint("2a", "2a - Flujo", endpointType.flowSensor);
    endpoints.addEndpoint("3", "3 - Lectura", endpointType.volumeSensor);
    endpoints.addEndpoint("4", "4 - Flujo reverso acumulado", endpointType.volumeSensor);
    endpoints.addEndpoint("5", "5 - Flujo diario acumulado", endpointType.volumeSensor);
    endpoints.addEndpoint("6", "6 - Apertura", endpointType.closureController);
    endpoints.addEndpoint("7", "7a - Alarma Batería baja", endpointType.iasSensor, iasEndpointSubType.alarmInput);
    endpoints.addEndpoint("8", "7b - Alarma Problema de batería", endpointType.iasSensor, iasEndpointSubType.alarmInput);
    endpoints.addEndpoint("9", "7c - Alarma Tubo vacío", endpointType.iasSensor, iasEndpointSubType.alarmInput);
    endpoints.addEndpoint("10", "7d - Alarma Flujo reverso", endpointType.iasSensor, iasEndpointSubType.alarmInput);
    endpoints.addEndpoint("11", "7e - Alarma Fuera de rango", endpointType.iasSensor, iasEndpointSubType.alarmInput);
    endpoints.addEndpoint("12", "7f - Alarma Problema de temperatura", endpointType.iasSensor, iasEndpointSubType.alarmInput);
    endpoints.addEndpoint("13", "7g - Alarma de EE", endpointType.iasSensor, iasEndpointSubType.alarmInput);
    endpoints.addEndpoint("14", "8 - No Serie", endpointType.textContainer);
}

function validateDeviceAddress(address, result) {
    // This function allows you to validate the address of a device, when
    // the user is creating it. If your device has special validation rules
    // for the address, you can check them here, and return an error message
    // in case the address format is incorrect.

    // In the code below, a validation is made to ensure that the address 
    // is exactly 10 characters long.

    // if (address.length != 10) {
    //   result.ok = false;
    //   result.errorMessage = {
    //     en: "The address must be 10 characters long", 
    //     es: "La dirección debe tener exactamente 10 caracteres"
    //   };
    // }
}

function updateDeviceUIRules(device, rules) {
    // This function allows you to specify UI rules at the device level.
    // For instance, you can make it possible to enable or disable adding
    // endpoints manually to the device after it was created.

    // In the code below, adding endpoints manually is disabled in the
    // user interface. This means that the device will be limited to the 
    // endpoints defined by function getEndpoints() above.

    // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules) {
    // This function allows you to specify UI rules at the endpoint level.
    // For instance, you can make it possible to delete certain endpoints, 
    // or edit their endpoint subtype, if applicable.

    // In the code below, the following rules are defined:
    // - Endpoints cannot be deleted.
    // - The endpoint subtype can be changed, but only for the second 
    //   endpoint.

    rules.canDelete = true;
    // rules.canEditSubType = (endpoint.address == "2");
}
