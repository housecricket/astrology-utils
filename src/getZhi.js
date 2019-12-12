const Gan = new Array('Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quí');
const Zhi = new Array('Tí', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi');

module.exports = {
    ofDay: function (jd) {
        var zhi = Zhi[(jd + 1) % 12];
        return zhi;
    },
    ofMonth: function (lYear, lMonth) {
        var zhi = Zhi[(lMonth + 1) % 12];
        return zhi;
    },
    ofYear: function (lYear) {
        var zhi = Zhi[(lYear + 8) % 12];
        return zhi;
    }
}