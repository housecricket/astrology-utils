const Gan = new Array('Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quí');
const Zhi = new Array('Tí', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi');

module.exports = {
    ofDay: function (jd) {
        var gan = Gan[(jd + 9) % 10];
        var zhi = Zhi[(jd + 1) % 12];
        return gan + ' ' + zhi;
    },
    ofMonth: function (lYear, lMonth) {
        var gan = Gan[(lYear * 12 + lMonth + 3) % 10];
        var zhi = Zhi[(lMonth + 1) % 12];
        return gan + ' ' + zhi;
    },
    ofYear: function (lYear) {
        var gan = Gan[(lYear + 6) % 10];
        var zhi = Zhi[(lYear + 8) % 12];
        return gan + ' ' + zhi;
    }
}