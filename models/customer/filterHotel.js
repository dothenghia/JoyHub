


function toFilterFormat(str) {
    str = str.toLowerCase();

    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
  
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); 
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); 
    return str;
}

function districtUnify(address)
{
    address = address.replace('quan ', 'q')
    return address
}

function cityUnify(address)
{
    address = address.replace(/tp ho chi minh|tphcm|thanh pho ho chi minh|tp hcm|tp.hcm|hcm|ho chi minh/g ,"tphcm")
    address = address.replace(/tp hanoi|tp ha noi|ha noi|hanoi|hn|thu do ha noi/g ,"hn")
    return address
}

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

export default async function filterHotel(data) {

    data = data[0]
    let showList = []
   
    let cityFind = cityUnify(toFilterFormat(data["city"]))
    let districtFind = ""
    
    
    districtFind = districtUnify(toFilterFormat(data["district"]))
    if(isNumeric(districtFind))
        districtFind = 'q'+districtFind 
    let hotelList = data["hotelList"]


    for (hotel of hotelList)
    {
        console.log(cityUnify(toFilterFormat(hotel["address"])))
        if (cityUnify(toFilterFormat(hotel["address"])).includes(cityFind))
        {
            if(districtUnify(toFilterFormat(hotel["address"])).includes(districtFind))
                showList.push(hotel)
        }

    }

    return showList
}
