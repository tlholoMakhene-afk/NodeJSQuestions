const converter = require('./logic');

function DisplayOutput(desiredmesurementunit = 'm',distance)
{
    if(desiredmesurementunit === 'm')
    {
        console.log(`${distance} Miles <= is equivalent to=> ${converter.DistanceConverter(desiredmesurementunit,distance)} Meters`);
    }else if(desiredmesurementunit === 'mi')
    {
        console.log(`${distance} Meters <= is equivalent to => ${converter.DistanceConverter(desiredmesurementunit,distance)} Miles`);
    }
}


//m represents what you want the unit of measurement to be in
//the function by default converts from miles to meters
DisplayOutput('m',5);
DisplayOutput('m',250);

//mi represents that you want the unit of measurement to be in miles
// and that you are converting from meters to miles
DisplayOutput('mi', 8046.72);
DisplayOutput('mi', 1609.344);
DisplayOutput('mi',402336);
