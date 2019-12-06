let text='';
for(let i =0;i<arr.length;i++)
{
    text+=
        `
            <table align="center">
                <h3 class="cangiua">${arr[i].ques}</h3> <br>
                <img class="cangiua" id='co' src="photo/${arr[i].img}" width="600" , height="400">
                <tr>
                    <td>
                        <input type="radio" id="r${i}1" name="question_0${i}" value="a" />
                        <label class="big-text" for="r${i}1"><span></span>${arr[i].a}</label>
                    </td>
                    <td>
                        <input type="radio" id="r${i}2" name="question_0${i}" value="b" />
                        <label class="big-text" for="r${i}2"><span></span>${arr[i].b}</label>
                    </td>

                </tr>
                <tr>
                    <td>
                        <input type="radio" id="r${i}3" name="question_0${i}" value="c" />
                        <label class="big-text" for="r${i}3"><span></span>${arr[i].c}</label>
                    </td>
                    <td>
                        <input type="radio" id="r${i}4" name="question_0${i}" value="d" />
                        <label class="big-text" for="r${i}4"><span></span>${arr[i].d}</label>
                    </td>
                </tr>
                    <p id="cau${i}"></p>
            </table>
        `
}

document.getElementById('display').innerHTML=text;

function check() {
    var question_00 = document.country.question_00.value;
    var question_01 = document.country.question_01.value;
    var question_02 = document.country.question_02.value;
    var question_03 = document.country.question_03.value;
    var question_04 = document.country.question_04.value;
    var question_05 = document.country.question_05.value;
    var question_06 = document.country.question_06.value;
    var question_07 = document.country.question_07.value;
    var question_08 = document.country.question_08.value;
    var question_09 = document.country.question_09.value;  
    var count = 0;

    if (question_00 == "c") {
        count++;
    }
    if (question_01 == "b") {
        count++;
    }
    if (question_02 == "d") {
        count++;
    }
    if (question_03 == "a") {
        count++;
    }
    if (question_04 == "b") {
        count++;
    }
    if (question_05 == "d") {
        count++;
    }
    if (question_06 == "a") {
        count++;
    }
    if (question_07 == "a") {
        count++;
    }
    if (question_08 == "a") {
        count++;
    }
    if (question_09 == "d") {
        count++;
    }            
    if (count == 0) {
        document.getElementById("picture").src ='image/lose.gif';
        alert("bạn chưa trả lời");
        
    } else
        if (count > 7) {
            alert(count + "/10  Kiến thức của bạn không tồi");
            document.getElementById("picture").src = "image/win.gif";

        } else {
            alert(count + " /10  Bạn có thể làm tốt hơn thế");
            document.getElementById("picture").src ='image/meh.jpeg';
        }
}  

function result() {
    document.getElementById("cau0").innerHTML = "Lào, tên chính thức là Cộng hoà Dân chủ Nhân dân Lào, diện tích đất là 230.612 km2. là quốc gia nội lục tại Đông Nam Á và là trung tâm của bán đảo Đông Dương, phía tây bắc giáp với Myanmar và Trung Quốc, phía đông giáp Việt Nam, phía tây nam giáp Campuchia, phía tây và tây nam giáp Thái Lan";
    document.getElementById("cau1").innerHTML = "Nhật Bản, diện tích 377.973 km² là một đảo quốc nằm ở vùng Đông Á. Tọa lạc trên Thái Bình Dương, nước này nằm bên rìa phía đông của Biển Nhật Bản, Biển Hoa Đông, Trung Quốc, bán đảo Triều Tiên và vùng Viễn Đông Nga, trải dài từ Biển Okhotsk ở phía bắc xuống Biển Hoa Đông và đảo Đài Loan ở phía nam."
    document.getElementById("cau2").innerHTML = "Ấn Độ,diện tích 3.287.000 km² là một quốc gia tại Nam Á. Đây là quốc gia lớn thứ bảy về diện tích, và đông dân thứ nhì trên thế giới với trên 1,33 tỷ người.."
    document.getElementById("cau3").innerHTML = "Cộng hòa Dân chủ Nhân dân Triều Tiên  – là quốc gia độc lập nằm tại Đông Á trên phần phía bắc Bán đảo Triều Tiên tách biệt với Hàn Quốc ở miền Nam"
    document.getElementById("cau4").innerHTML = "Brasil là quốc gia lớn nhất Nam Mỹ. Brasil là quốc gia lớn thứ năm trên thế giới về diện tích lẫn dân số với hơn 190 triệu người. Brasil là quốc gia nói tiếng Bồ Đào Nha duy nhất ở châu Mỹ"
    document.getElementById("cau5").innerHTML = "Bồ Đào Nha là một quốc gia nằm ở Tây Nam châu Âu trên bán đảo Iberia. Bồ Đào Nha là nước cực Tây của châu Âu lục địa."
    document.getElementById("cau6").innerHTML = "Venezuela là một quốc gia thuộc khu vực Nam Mỹ. Venezuela tiếp giáp với Guyana về phía đông, với Brazil về phía nam, Colombia về phía tây và biển Caribbean về phía bắc."
    document.getElementById("cau7").innerHTML = "México, tên chính thức: Hợp chúng quốc México, là một nước cộng hòa liên bang thuộc khu vực Bắc Mỹ. México là một quốc gia rộng lớn với diện tích gần 2 triệu km², đứng hàng thứ 14 trên thế giới và dân số khoảng 106 triệu người, đứng hàng thứ 11 trên thế giới."
    document.getElementById("cau8").innerHTML = "Nam Phi là một quốc gia nằm ở mũi phía nam lục địa Châu Phi. Nước này giáp biên giới với Namibia, Botswana, Zimbabwe, Mozambique, Swaziland"
    document.getElementById("cau9").innerHTML = "Cuba, tên gọi chính thức là Cộng hòa Cuba là Quốc gia bao gồm đảo Cuba, cùng với đảo Thanh Niên và các đảo nhỏ xung quanh. Cuba nằm ở phía bắc Vùng Caribe ở giao điểm của ba miền biển lớn: Biển Caribe, Vịnh México và Đại Tây Dương."
}
