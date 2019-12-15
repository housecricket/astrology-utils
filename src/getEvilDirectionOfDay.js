const evilDirectionTable = {
    "Kỷ Dậu,Canh Tuất,Tân Hợi,Nhâm Tí,Quý Sửu,Giáp Dần":  "Đông Bắc",
    "Ất Mão,Bính Thìn,Đinh Tỵ,Mậu Ngọ,Kỷ Mùi" : "Đông",
    "Canh Thân,Tân Dậu,Nhâm Tuất,Quý Hợi,Giáp Tí,Ất Sửu" : "Đông Nam",
    "Bính Dần,Đinh Mão,Mậu Thìn,Kỷ Tỵ,Canh Ngọ" : "Nam",
    "Tân Mùi,Nhâm Thân,Quý Dậu,Giáp Tuất,Ất Hợi,Bính Tí": "Tây Nam",
    "Đinh Sửu,Mậu Dần,Kỷ Mão,Canh Thìn,Tân Tỵ" : "Tây",
    "Nhâm Ngọ,Quý Mùi,Giáp Thân,Ất Dậu,Bính Tuất,Đinh Hợi": "Tây Bắc",
    "Mậu Tí,Kỷ Sửu,Canh Dần,Tân Mão,Nhâm Thìn" : "Bắc"
}

module.exports = (cDay) => {
    for (const key in (evilDirectionTable)){
        if (key.split(',').includes(cDay)){
            return evilDirectionTable[key]
        }
    }
}