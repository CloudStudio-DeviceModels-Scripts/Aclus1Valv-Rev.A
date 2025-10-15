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
    
    var t = endpoints.addEndpoint("T00001", "Temperature A", endpointType.temperatureSensor);
        alert = t.addAlert();
        alert.variableTypeId = variableType.temperature;
        alert.conditionType = conditionType.greaterOrEqual;
        alert.threshold = 50;
        alert.normalConditionType = conditionType.lower;
        alert.normalThreshold = 25;
        alert.severity = alarmSeverity.high ;
        alert.notificationEmails = ['valeria.marjovsky@cloud.studio'];
    var e = endpoints.addEndpoint("F0001", "Flujo Gen", endpointType.genericSensor);
    e.variableTypeId = 1242;
    endpoints.addEndpoint("F00002", "Flujo Principal", endpointType.flowSensor);
    endpoints.addEndpoint("V00001", "Lectura Vol", endpointType.volumeSensor);
    endpoints.addEndpoint("V00003", "Flujo reverso Vol acumulado", endpointType.volumeSensor);
    endpoints.addEndpoint("V00004", "Flujo diario Vol acumulado", endpointType.volumeSensor);
    endpoints.addEndpoint("CC0001", "Controlador de Apertura", endpointType.closureController);
    endpoints.addEndpoint("A00001", "Alarma Batería baja", endpointType.iasSensor, iasEndpointSubType.alarmInput);
    endpoints.addEndpoint("A00002", "Alarma Problema de batería", endpointType.iasSensor, iasEndpointSubType.alarmInput);
    endpoints.addEndpoint("A00003", "Alarma Tubo vacío", endpointType.iasSensor, iasEndpointSubType.alarmInput);
    endpoints.addEndpoint("A00004", "Alarma Flujo reverso", endpointType.iasSensor, iasEndpointSubType.alarmInput);
    endpoints.addEndpoint("A00005", "Alarma Fuera de rango", endpointType.iasSensor, iasEndpointSubType.alarmInput);
    endpoints.addEndpoint("A00006", "Alarma Problema de temperatura", endpointType.iasSensor, iasEndpointSubType.alarmInput);
    endpoints.addEndpoint("A00007", "Alarma de EE", endpointType.iasSensor, iasEndpointSubType.alarmInput);
    endpoints.addEndpoint("A00008", "Serie", endpointType.textContainer);
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
