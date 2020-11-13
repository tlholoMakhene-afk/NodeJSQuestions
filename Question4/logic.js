module.exports.DistanceConverter =  function (unitOfMeasurement,distanceToConvert)
    {
        if(unitOfMeasurement == 'm')
        {
            return distanceToConvert * 1609.344;
        }else if(unitOfMeasurement == 'mi')
        {
            return distanceToConvert/1609.344;
        }
        return;

    }

