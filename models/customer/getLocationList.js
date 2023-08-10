const locationList = [
    {
        name: "Hà Nội",
        id: 1,
        slug: "ha_noi",
        districts: [
            {
                name: "Ba Đình",
                id: 1,
                slug: "ba_dinh",
            },
            {
                name: "Hoàn Kiếm",
                id: 2,
                slug: "hoan_kiem",
            },
            {
                name: "Tây Hồ",
                id: 3,
                slug: "tay_ho",
            },
            {
                name: "Long Biên",
                id: 4,
                slug: "long_bien",
            },
            {
                name: "Cầu Giấy",
                id: 5,
                slug: "cau_giay",
            },
            {
                name: "Đống Đa",
                id: 6,
                slug: "dong_da",
            },
            {
                name: "Hai Bà Trưng",
                id: 7,
                slug: "hai_ba_trung",
            },
            {
                name: "Hoàng Mai",
                id: 8,
                slug: "hoang_mai",
            },
            {
                name: "Thanh Xuân",
                id: 9,
                slug: "thanh_xuan",
            },
            {
                name: "Sóc Sơn",
                id: 16,
                slug: "soc_son",
            },
            {
                name: "Đông Anh",
                id: 17,
                slug: "dong_anh",
            },
            {
                name: "Gia Lâm",
                id: 18,
                slug: "gia_lam",
            },
            {
                name: "Nam Từ Liêm",
                id: 19,
                slug: "nam_tu_liem",
            },
            {
                name: "Thanh Trì",
                id: 20,
                slug: "thanh_tri",
            },
            {
                name: "Bắc Từ Liêm",
                id: 21,
                slug: "bac_tu_liem",
            },
            {
                name: "Mê Linh",
                id: 250,
                slug: "me_linh",
            },
            {
                name: "Hà Đông",
                id: 268,
                slug: "ha_dong",
            },
            {
                name: "Sơn Tây",
                id: 269,
                slug: "son_tay",
            },
            {
                name: "Ba Vì",
                id: 271,
                slug: "ba_vi",
            },
            {
                name: "Phúc Thọ",
                id: 272,
                slug: "phuc_tho",
            },
            {
                name: "Đan Phượng",
                id: 273,
                slug: "dan_phuong",
            },
            {
                name: "Hoài Đức",
                id: 274,
                slug: "hoai_duc",
            },
            {
                name: "Quốc Oai",
                id: 275,
                slug: "quoc_oai",
            },
            {
                name: "Thạch Thất",
                id: 276,
                slug: "thach_that",
            },
            {
                name: "Chương Mỹ",
                id: 277,
                slug: "chuong_my",
            },
            {
                name: "Thanh Oai",
                id: 278,
                slug: "thanh_oai",
            },
            {
                name: "Thường Tín",
                id: 279,
                slug: "thuong_tin",
            },
            {
                name: "Phú Xuyên",
                id: 280,
                slug: "phu_xuyen",
            },
            {
                name: "Ứng Hòa",
                id: 281,
                slug: "ung_hoa",
            },
            {
                name: "Mỹ Đức",
                id: 282,
                slug: "my_duc",
            }
        ]
    },
    {
        name: "Hà Giang",
        id: 2,
        slug: "ha_giang",
        districts: [
            {
                name: "Hà Giang",
                id: 24,
                slug: "ha_giang",
            },
            {
                name: "Đồng Văn",
                id: 26,
                slug: "dong_van",
            },
            {
                name: "Mèo Vạc",
                id: 27,
                slug: "meo_vac",
            },
            {
                name: "Yên Minh",
                id: 28,
                slug: "yen_minh",
            },
            {
                name: "Quản Bạ",
                id: 29,
                slug: "ba",
            },
            {
                name: "Vị Xuyên",
                id: 30,
                slug: "vi_xuyen",
            },
            {
                name: "Bắc Mê",
                id: 31,
                slug: "bac_me",
            },
            {
                name: "Hoàng Su Phì",
                id: 32,
                slug: "hoang_su_phi",
            },
            {
                name: "Xín Mần",
                id: 33,
                slug: "xin_man",
            },
            {
                name: "Bắc Quang",
                id: 34,
                slug: "bac_quang",
            },
            {
                name: "Quang Bình",
                id: 35,
                slug: "quang_binh",
            }
        ]
    },
    {
        name: "Cao Bằng",
        id: 4,
        slug: "cao_bang",
        districts: [
            {
                name: "Cao Bằng",
                id: 40,
                slug: "cao_bang",
            },
            {
                name: "Bảo Lâm",
                id: 42,
                slug: "bao_lam",
            },
            {
                name: "Bảo Lạc",
                id: 43,
                slug: "bao_lac",
            },
            {
                name: "Hà Quảng",
                id: 45,
                slug: "ha_quang",
            },
            {
                name: "Trùng Khánh",
                id: 47,
                slug: "trung_khanh",
            },
            {
                name: "Hạ Lang",
                id: 48,
                slug: "ha_lang",
            },
            {
                name: "Quảng Hòa",
                id: 49,
                slug: "quang_hoa",
            },
            {
                name: "Hoà An",
                id: 51,
                slug: "hoa_an",
            },
            {
                name: "Nguyên Bình",
                id: 52,
                slug: "nguyen_binh",
            },
            {
                name: "Thạch An",
                id: 53,
                slug: "thach_an",
            }
        ]
    },
    {
        name: "Bắc Kạn",
        id: 6,
        slug: "bac_kan",
        districts: [
            {
                name: "Thành Phố Bắc Kạn",
                id: 58,
                slug: "bac_kan",
            },
            {
                name: "Pác Nặm",
                id: 60,
                slug: "pac_nam",
            },
            {
                name: "Ba Bể",
                id: 61,
                slug: "ba_be",
            },
            {
                name: "Ngân Sơn",
                id: 62,
                slug: "ngan_son",
            },
            {
                name: "Bạch Thông",
                id: 63,
                slug: "bach_thong",
            },
            {
                name: "Chợ Đồn",
                id: 64,
                slug: "cho_don",
            },
            {
                name: "Chợ Mới",
                id: 65,
                slug: "cho_moi",
            },
            {
                name: "Na Rì",
                id: 66,
                slug: "na_ri",
            }
        ]
    },
    {
        name: "Tuyên Quang",
        id: 8,
        slug: "tuyen_quang",
        districts: [
            {
                name: "Tuyên Quang",
                id: 70,
                slug: "tuyen_quang",
            },
            {
                name: "Lâm Bình",
                id: 71,
                slug: "lam_binh",
            },
            {
                name: "Na Hang",
                id: 72,
                slug: "na_hang",
            },
            {
                name: "Chiêm Hóa",
                id: 73,
                slug: "chiem_hoa",
            },
            {
                name: "Hàm Yên",
                id: 74,
                slug: "ham_yen",
            },
            {
                name: "Yên Sơn",
                id: 75,
                slug: "yen_son",
            },
            {
                name: "Sơn Dương",
                id: 76,
                slug: "son_duong",
            }
        ]
    },
    {
        name: "Lào Cai",
        id: 10,
        slug: "lao_cai",
        districts: [
            {
                name: "Lào Cai",
                id: 80,
                slug: "lao_cai",
            },
            {
                name: "Bát Xát",
                id: 82,
                slug: "bat_xat",
            },
            {
                name: "Mường Khương",
                id: 83,
                slug: "muong_khuong",
            },
            {
                name: "Si Ma Cai",
                id: 84,
                slug: "si_ma_cai",
            },
            {
                name: "Bắc Hà",
                id: 85,
                slug: "bac_ha",
            },
            {
                name: "Bảo Thắng",
                id: 86,
                slug: "bao_thang",
            },
            {
                name: "Bảo Yên",
                id: 87,
                slug: "bao_yen",
            },
            {
                name: "Sa Pa",
                id: 88,
                slug: "sa_pa",
            },
            {
                name: "Văn Bàn",
                id: 89,
                slug: "van_ban",
            }
        ]
    },
    {
        name: "Điện Biên",
        id: 11,
        slug: "dien_bien",
        districts: [
            {
                name: "Điện Biên Phủ",
                id: 94,
                slug: "dien_bien_phu",
            },
            {
                name: "Mường Lay",
                id: 95,
                slug: "muong_lay",
            },
            {
                name: "Mường Nhé",
                id: 96,
                slug: "muong_nhe",
            },
            {
                name: "Mường Chà",
                id: 97,
                slug: "muong_cha",
            },
            {
                name: "Tủa Chùa",
                id: 98,
                slug: "tua_chua",
            },
            {
                name: "Tuần Giáo",
                id: 99,
                slug: "tuan_giao",
            },
            {
                name: "Điện Biên",
                id: 100,
                slug: "dien_bien",
            },
            {
                name: "Điện Biên Đông",
                id: 101,
                slug: "dien_bien_dong",
            },
            {
                name: "Mường Ảng",
                id: 102,
                slug: "muong_ang",
            },
            {
                name: "Nậm Pồ",
                id: 103,
                slug: "nam_po",
            }
        ]
    },
    {
        name: "Lai Châu",
        id: 12,
        slug: "lai_chau",
        districts: [
            {
                name: "Lai Châu",
                id: 105,
                slug: "lai_chau",
            },
            {
                name: "Tam Đường",
                id: 106,
                slug: "tam_duong",
            },
            {
                name: "Mường Tè",
                id: 107,
                slug: "muong_te",
            },
            {
                name: "Sìn Hồ",
                id: 108,
                slug: "sin_ho",
            },
            {
                name: "Phong Thổ",
                id: 109,
                slug: "phong_tho",
            },
            {
                name: "Than Uyên",
                id: 110,
                slug: "than_uyen",
            },
            {
                name: "Tân Uyên",
                id: 111,
                slug: "tan_uyen",
            },
            {
                name: "Nậm Nhùn",
                id: 112,
                slug: "nam_nhun",
            }
        ]
    },
    {
        name: "Sơn La",
        id: 14,
        slug: "son_la",
        districts: [
            {
                name: "Sơn La",
                id: 116,
                slug: "son_la",
            },
            {
                name: "Quỳnh Nhai",
                id: 118,
                slug: "quynh_nhai",
            },
            {
                name: "Thuận Châu",
                id: 119,
                slug: "thuan_chau",
            },
            {
                name: "Mường La",
                id: 120,
                slug: "muong_la",
            },
            {
                name: "Bắc Yên",
                id: 121,
                slug: "bac_yen",
            },
            {
                name: "Phù Yên",
                id: 122,
                slug: "phu_yen",
            },
            {
                name: "Mộc Châu",
                id: 123,
                slug: "moc_chau",
            },
            {
                name: "Yên Châu",
                id: 124,
                slug: "yen_chau",
            },
            {
                name: "Mai Sơn",
                id: 125,
                slug: "mai_son",
            },
            {
                name: "Sông Mã",
                id: 126,
                slug: "song_ma",
            },
            {
                name: "Sốp Cộp",
                id: 127,
                slug: "sop_cop",
            },
            {
                name: "Vân Hồ",
                id: 128,
                slug: "van_ho",
            }
        ]
    },
    {
        name: "Yên Bái",
        id: 15,
        slug: "yen_bai",
        districts: [
            {
                name: "Yên Bái",
                id: 132,
                slug: "yen_bai",
            },
            {
                name: "Nghĩa Lộ",
                id: 133,
                slug: "nghia_lo",
            },
            {
                name: "Lục Yên",
                id: 135,
                slug: "luc_yen",
            },
            {
                name: "Văn Yên",
                id: 136,
                slug: "van_yen",
            },
            {
                name: "Mù Căng Chải",
                id: 137,
                slug: "mu_cang_chai",
            },
            {
                name: "Trấn Yên",
                id: 138,
                slug: "tran_yen",
            },
            {
                name: "Trạm Tấu",
                id: 139,
                slug: "tram_tau",
            },
            {
                name: "Văn Chấn",
                id: 140,
                slug: "van_chan",
            },
            {
                name: "Yên Bình",
                id: 141,
                slug: "yen_binh",
            }
        ]
    },
    {
        name: "Hoà Bình",
        id: 17,
        slug: "hoa_binh",
        districts: [
            {
                name: "Hòa Bình",
                id: 148,
                slug: "hoa_binh",
            },
            {
                name: "Đà Bắc",
                id: 150,
                slug: "da_bac",
            },
            {
                name: "Lương Sơn",
                id: 152,
                slug: "luong_son",
            },
            {
                name: "Kim Bôi",
                id: 153,
                slug: "kim_boi",
            },
            {
                name: "Cao Phong",
                id: 154,
                slug: "cao_phong",
            },
            {
                name: "Tân Lạc",
                id: 155,
                slug: "tan_lac",
            },
            {
                name: "Mai Châu",
                id: 156,
                slug: "mai_chau",
            },
            {
                name: "Lạc Sơn",
                id: 157,
                slug: "lac_son",
            },
            {
                name: "Yên Thủy",
                id: 158,
                slug: "yen_thuy",
            },
            {
                name: "Lạc Thủy",
                id: 159,
                slug: "lac_thuy",
            }
        ]
    },
    {
        name: "Thái Nguyên",
        id: 19,
        slug: "thai_nguyen",
        districts: [
            {
                name: "Thái Nguyên",
                id: 164,
                slug: "thai_nguyen",
            },
            {
                name: "Sông Công",
                id: 165,
                slug: "song_cong",
            },
            {
                name: "Định Hóa",
                id: 167,
                slug: "dinh_hoa",
            },
            {
                name: "Phú Lương",
                id: 168,
                slug: "phu_luong",
            },
            {
                name: "Đồng Hỷ",
                id: 169,
                slug: "dong_hy",
            },
            {
                name: "Võ Nhai",
                id: 170,
                slug: "vo_nhai",
            },
            {
                name: "Đại Từ",
                id: 171,
                slug: "dai_tu",
            },
            {
                name: "Phổ Yên",
                id: 172,
                slug: "pho_yen",
            },
            {
                name: "Phú Bình",
                id: 173,
                slug: "phu_binh",
            }
        ]
    },
    {
        name: "Lạng Sơn",
        id: 20,
        slug: "lang_son",
        districts: [
            {
                name: "Lạng Sơn",
                id: 178,
                slug: "lang_son",
            },
            {
                name: "Tràng Định",
                id: 180,
                slug: "trang_dinh",
            },
            {
                name: "Bình Gia",
                id: 181,
                slug: "binh_gia",
            },
            {
                name: "Văn Lãng",
                id: 182,
                slug: "van_lang",
            },
            {
                name: "Cao Lộc",
                id: 183,
                slug: "cao_loc",
            },
            {
                name: "Văn Quan",
                id: 184,
                slug: "van_quan",
            },
            {
                name: "Bắc Sơn",
                id: 185,
                slug: "bac_son",
            },
            {
                name: "Hữu Lũng",
                id: 186,
                slug: "huu_lung",
            },
            {
                name: "Chi Lăng",
                id: 187,
                slug: "chi_lang",
            },
            {
                name: "Lộc Bình",
                id: 188,
                slug: "loc_binh",
            },
            {
                name: "Đình Lập",
                id: 189,
                slug: "dinh_lap",
            }
        ]
    },
    {
        name: "Quảng Ninh",
        id: 22,
        slug: "quang_ninh",
        districts: [
            {
                name: "Hạ Long",
                id: 193,
                slug: "ha_long",
            },
            {
                name: "Móng Cái",
                id: 194,
                slug: "mong_cai",
            },
            {
                name: "Cẩm Phả",
                id: 195,
                slug: "cam_pha",
            },
            {
                name: "Uông Bí",
                id: 196,
                slug: "uong_bi",
            },
            {
                name: "Bình Liêu",
                id: 198,
                slug: "binh_lieu",
            },
            {
                name: "Tiên Yên",
                id: 199,
                slug: "tien_yen",
            },
            {
                name: "Đầm Hà",
                id: 200,
                slug: "dam_ha",
            },
            {
                name: "Hải Hà",
                id: 201,
                slug: "hai_ha",
            },
            {
                name: "Ba Chẽ",
                id: 202,
                slug: "ba_che",
            },
            {
                name: "Vân Đồn",
                id: 203,
                slug: "van_don",
            },
            {
                name: "Đông Triều",
                id: 205,
                slug: "dong_trieu",
            },
            {
                name: "Quảng Yên",
                id: 206,
                slug: "quang_yen",
            },
            {
                name: "Cô Tô",
                id: 207,
                slug: "co_to",
            }
        ]
    },
    {
        name: "Bắc Giang",
        id: 24,
        slug: "bac_giang",
        districts: [
            {
                name: "Bắc Giang",
                id: 213,
                slug: "bac_giang",
            },
            {
                name: "Yên Thế",
                id: 215,
                slug: "yen_the",
            },
            {
                name: "Tân Yên",
                id: 216,
                slug: "tan_yen",
            },
            {
                name: "Lạng Giang",
                id: 217,
                slug: "lang_giang",
            },
            {
                name: "Lục Nam",
                id: 218,
                slug: "luc_nam",
            },
            {
                name: "Lục Ngạn",
                id: 219,
                slug: "luc_ngan",
            },
            {
                name: "Sơn Động",
                id: 220,
                slug: "son_dong",
            },
            {
                name: "Yên Dũng",
                id: 221,
                slug: "yen_dung",
            },
            {
                name: "Việt Yên",
                id: 222,
                slug: "viet_yen",
            },
            {
                name: "Hiệp Hòa",
                id: 223,
                slug: "hiep_hoa",
            }
        ]
    },
    {
        name: "Phú Thọ",
        id: 25,
        slug: "phu_tho",
        districts: [
            {
                name: "Việt Trì",
                id: 227,
                slug: "viet_tri",
            },
            {
                name: "Phú Thọ",
                id: 228,
                slug: "phu_tho",
            },
            {
                name: "Đoan Hùng",
                id: 230,
                slug: "doan_hung",
            },
            {
                name: "Hạ Hoà",
                id: 231,
                slug: "ha_hoa",
            },
            {
                name: "Thanh Ba",
                id: 232,
                slug: "thanh_ba",
            },
            {
                name: "Phù Ninh",
                id: 233,
                slug: "phu_ninh",
            },
            {
                name: "Yên Lập",
                id: 234,
                slug: "yen_lap",
            },
            {
                name: "Cẩm Khê",
                id: 235,
                slug: "cam_khe",
            },
            {
                name: "Tam Nông",
                id: 236,
                slug: "tam_nong",
            },
            {
                name: "Lâm Thao",
                id: 237,
                slug: "lam_thao",
            },
            {
                name: "Thanh Sơn",
                id: 238,
                slug: "thanh_son",
            },
            {
                name: "Thanh Thuỷ",
                id: 239,
                slug: "thanh_thuy",
            },
            {
                name: "Tân Sơn",
                id: 240,
                slug: "tan_son",
            }
        ]
    },
    {
        name: "Vĩnh Phúc",
        id: 26,
        slug: "vinh_phuc",
        districts: [
            {
                name: "Vĩnh Yên",
                id: 243,
                slug: "vinh_yen",
            },
            {
                name: "Phúc Yên",
                id: 244,
                slug: "phuc_yen",
            },
            {
                name: "Lập Thạch",
                id: 246,
                slug: "lap_thach",
            },
            {
                name: "Tam Dương",
                id: 247,
                slug: "tam_duong",
            },
            {
                name: "Tam Đảo",
                id: 248,
                slug: "tam_dao",
            },
            {
                name: "Bình Xuyên",
                id: 249,
                slug: "binh_xuyen",
            },
            {
                name: "Yên Lạc",
                id: 251,
                slug: "yen_lac",
            },
            {
                name: "Vĩnh Tường",
                id: 252,
                slug: "vinh_tuong",
            },
            {
                name: "Sông Lô",
                id: 253,
                slug: "song_lo",
            }
        ]
    },
    {
        name: "Bắc Ninh",
        id: 27,
        slug: "bac_ninh",
        districts: [
            {
                name: "Bắc Ninh",
                id: 256,
                slug: "bac_ninh",
            },
            {
                name: "Yên Phong",
                id: 258,
                slug: "yen_phong",
            },
            {
                name: "Quế Võ",
                id: 259,
                slug: "que_vo",
            },
            {
                name: "Tiên Du",
                id: 260,
                slug: "tien_du",
            },
            {
                name: "Từ Sơn",
                id: 261,
                slug: "tu_son",
            },
            {
                name: "Thuận Thành",
                id: 262,
                slug: "thuan_thanh",
            },
            {
                name: "Gia Bình",
                id: 263,
                slug: "gia_binh",
            },
            {
                name: "Lương Tài",
                id: 264,
                slug: "luong_tai",
            }
        ]
    },
    {
        name: "Hải Dương",
        id: 30,
        slug: "hai_duong",
        districts: [
            {
                name: "Hải Dương",
                id: 288,
                slug: "hai_duong",
            },
            {
                name: "Chí Linh",
                id: 290,
                slug: "chi_linh",
            },
            {
                name: "Nam Sách",
                id: 291,
                slug: "nam_sach",
            },
            {
                name: "Kinh Môn",
                id: 292,
                slug: "kinh_mon",
            },
            {
                name: "Kim Thành",
                id: 293,
                slug: "kim_thanh",
            },
            {
                name: "Thanh Hà",
                id: 294,
                slug: "thanh_ha",
            },
            {
                name: "Cẩm Giàng",
                id: 295,
                slug: "cam_giang",
            },
            {
                name: "Bình Giang",
                id: 296,
                slug: "binh_giang",
            },
            {
                name: "Gia Lộc",
                id: 297,
                slug: "gia_loc",
            },
            {
                name: "Tứ Kỳ",
                id: 298,
                slug: "tu_ky",
            },
            {
                name: "Ninh Giang",
                id: 299,
                slug: "ninh_giang",
            },
            {
                name: "Thanh Miện",
                id: 300,
                slug: "thanh_mien",
            }
        ]
    },
    {
        name: "Hải Phòng",
        id: 31,
        slug: "hai_phong",
        districts: [
            {
                name: "Hồng Bàng",
                id: 303,
                slug: "hong_bang",
            },
            {
                name: "Ngô Quyền",
                id: 304,
                slug: "ngo_quyen",
            },
            {
                name: "Lê Chân",
                id: 305,
                slug: "le_chan",
            },
            {
                name: "Hải An",
                id: 306,
                slug: "hai_an",
            },
            {
                name: "Kiến An",
                id: 307,
                slug: "kien_an",
            },
            {
                name: "Đồ Sơn",
                id: 308,
                slug: "do_son",
            },
            {
                name: "Dương Kinh",
                id: 309,
                slug: "duong_kinh",
            },
            {
                name: "Thuỷ Nguyên",
                id: 311,
                slug: "thuy_nguyen",
            },
            {
                name: "An Dương",
                id: 312,
                slug: "an_duong",
            },
            {
                name: "An Lão",
                id: 313,
                slug: "an_lao",
            },
            {
                name: "Kiến Thuỵ",
                id: 314,
                slug: "kien_thuy",
            },
            {
                name: "Tiên Lãng",
                id: 315,
                slug: "tien_lang",
            },
            {
                name: "Vĩnh Bảo",
                id: 316,
                slug: "vinh_bao",
            },
            {
                name: "Cát Hải",
                id: 317,
                slug: "cat_hai",
            },
            {
                name: "Bạch Long Vĩ",
                id: 318,
                slug: "bach_long_vi",
            }
        ]
    },
    {
        name: "Hưng Yên",
        id: 33,
        slug: "hung_yen",
        districts: [
            {
                name: "Hưng Yên",
                id: 323,
                slug: "hung_yen",
            },
            {
                name: "Văn Lâm",
                id: 325,
                slug: "van_lam",
            },
            {
                name: "Văn Giang",
                id: 326,
                slug: "van_giang",
            },
            {
                name: "Yên Mỹ",
                id: 327,
                slug: "yen_my",
            },
            {
                name: "Mỹ Hào",
                id: 328,
                slug: "my_hao",
            },
            {
                name: "Ân Thi",
                id: 329,
                slug: "an_thi",
            },
            {
                name: "Khoái Châu",
                id: 330,
                slug: "khoai_chau",
            },
            {
                name: "Kim Động",
                id: 331,
                slug: "kim_dong",
            },
            {
                name: "Tiên Lữ",
                id: 332,
                slug: "tien_lu",
            },
            {
                name: "Phù Cừ",
                id: 333,
                slug: "phu_cu",
            }
        ]
    },
    {
        name: "Thái Bình",
        id: 34,
        slug: "thai_binh",
        districts: [
            {
                name: "Thái Bình",
                id: 336,
                slug: "thai_binh",
            },
            {
                name: "Quỳnh Phụ",
                id: 338,
                slug: "quynh_phu",
            },
            {
                name: "Hưng Hà",
                id: 339,
                slug: "hung_ha",
            },
            {
                name: "Đông Hưng",
                id: 340,
                slug: "dong_hung",
            },
            {
                name: "Thái Thụy",
                id: 341,
                slug: "thai_thuy",
            },
            {
                name: "Tiền Hải",
                id: 342,
                slug: "tien_hai",
            },
            {
                name: "Kiến Xương",
                id: 343,
                slug: "kien_xuong",
            },
            {
                name: "Vũ Thư",
                id: 344,
                slug: "vu_thu",
            }
        ]
    },
    {
        name: "Hà Nam",
        id: 35,
        slug: "ha_nam",
        districts: [
            {
                name: "Phủ Lý",
                id: 347,
                slug: "phu_ly",
            },
            {
                name: "Duy Tiên",
                id: 349,
                slug: "duy_tien",
            },
            {
                name: "Kim Bảng",
                id: 350,
                slug: "kim_bang",
            },
            {
                name: "Thanh Liêm",
                id: 351,
                slug: "thanh_liem",
            },
            {
                name: "Bình Lục",
                id: 352,
                slug: "binh_luc",
            },
            {
                name: "Lý Nhân",
                id: 353,
                slug: "ly_nhan",
            }
        ]
    },
    {
        name: "Nam Định",
        id: 36,
        slug: "nam_dinh",
        districts: [
            {
                name: "Nam Định",
                id: 356,
                slug: "nam_dinh",
            },
            {
                name: "Mỹ Lộc",
                id: 358,
                slug: "my_loc",
            },
            {
                name: "Vụ Bản",
                id: 359,
                slug: "vu_ban",
            },
            {
                name: "Ý Yên",
                id: 360,
                slug: "y_yen",
            },
            {
                name: "Nghĩa Hưng",
                id: 361,
                slug: "nghia_hung",
            },
            {
                name: "Nam Trực",
                id: 362,
                slug: "nam_truc",
            },
            {
                name: "Trực Ninh",
                id: 363,
                slug: "truc_ninh",
            },
            {
                name: "Xuân Trường",
                id: 364,
                slug: "xuan_truong",
            },
            {
                name: "Giao Thủy",
                id: 365,
                slug: "giao_thuy",
            },
            {
                name: "Hải Hậu",
                id: 366,
                slug: "hai_hau",
            }
        ]
    },
    {
        name: "Ninh Bình",
        id: 37,
        slug: "ninh_binh",
        districts: [
            {
                name: "Ninh Bình",
                id: 369,
                slug: "ninh_binh",
            },
            {
                name: "Tam Điệp",
                id: 370,
                slug: "tam_diep",
            },
            {
                name: "Nho Quan",
                id: 372,
                slug: "nho_quan",
            },
            {
                name: "Gia Viễn",
                id: 373,
                slug: "gia_vien",
            },
            {
                name: "Hoa Lư",
                id: 374,
                slug: "hoa_lu",
            },
            {
                name: "Yên Khánh",
                id: 375,
                slug: "yen_khanh",
            },
            {
                name: "Kim Sơn",
                id: 376,
                slug: "kim_son",
            },
            {
                name: "Yên Mô",
                id: 377,
                slug: "yen_mo",
            }
        ]
    },
    {
        name: "Thanh Hóa",
        id: 38,
        slug: "thanh_hoa",
        districts: [
            {
                name: "Thanh Hóa",
                id: 380,
                slug: "thanh_hoa",
            },
            {
                name: "Bỉm Sơn",
                id: 381,
                slug: "bim_son",
            },
            {
                name: "Sầm Sơn",
                id: 382,
                slug: "sam_son",
            },
            {
                name: "Mường Lát",
                id: 384,
                slug: "muong_lat",
            },
            {
                name: "Quan Hóa",
                id: 385,
                slug: "hoa",
            },
            {
                name: "Bá Thước",
                id: 386,
                slug: "ba_thuoc",
            },
            {
                name: "Quan Sơn",
                id: 387,
                slug: "son",
            },
            {
                name: "Lang Chánh",
                id: 388,
                slug: "lang_chanh",
            },
            {
                name: "Ngọc Lặc",
                id: 389,
                slug: "ngoc_lac",
            },
            {
                name: "Cẩm Thủy",
                id: 390,
                slug: "cam_thuy",
            },
            {
                name: "Thạch Thành",
                id: 391,
                slug: "thach_thanh",
            },
            {
                name: "Hà Trung",
                id: 392,
                slug: "ha_trung",
            },
            {
                name: "Vĩnh Lộc",
                id: 393,
                slug: "vinh_loc",
            },
            {
                name: "Yên Định",
                id: 394,
                slug: "yen_dinh",
            },
            {
                name: "Thọ Xuân",
                id: 395,
                slug: "tho_xuan",
            },
            {
                name: "Thường Xuân",
                id: 396,
                slug: "thuong_xuan",
            },
            {
                name: "Triệu Sơn",
                id: 397,
                slug: "trieu_son",
            },
            {
                name: "Thiệu Hóa",
                id: 398,
                slug: "thieu_hoa",
            },
            {
                name: "Hoằng Hóa",
                id: 399,
                slug: "hoang_hoa",
            },
            {
                name: "Hậu Lộc",
                id: 400,
                slug: "hau_loc",
            },
            {
                name: "Nga Sơn",
                id: 401,
                slug: "nga_son",
            },
            {
                name: "Như Xuân",
                id: 402,
                slug: "nhu_xuan",
            },
            {
                name: "Như Thanh",
                id: 403,
                slug: "nhu_thanh",
            },
            {
                name: "Nông Cống",
                id: 404,
                slug: "nong_cong",
            },
            {
                name: "Đông Sơn",
                id: 405,
                slug: "dong_son",
            },
            {
                name: "Quảng Xương",
                id: 406,
                slug: "quang_xuong",
            },
            {
                name: "Nghi Sơn",
                id: 407,
                slug: "nghi_son",
            }
        ]
    },
    {
        name: "Nghệ An",
        id: 40,
        slug: "nghe_an",
        districts: [
            {
                name: "Vinh",
                id: 412,
                slug: "vinh",
            },
            {
                name: "Cửa Lò",
                id: 413,
                slug: "cua_lo",
            },
            {
                name: "Thái Hoà",
                id: 414,
                slug: "thai_hoa",
            },
            {
                name: "Quế Phong",
                id: 415,
                slug: "que_phong",
            },
            {
                name: "Quỳ Châu",
                id: 416,
                slug: "quy_chau",
            },
            {
                name: "Kỳ Sơn",
                id: 417,
                slug: "ky_son",
            },
            {
                name: "Tương Dương",
                id: 418,
                slug: "tuong_duong",
            },
            {
                name: "Nghĩa Đàn",
                id: 419,
                slug: "nghia_dan",
            },
            {
                name: "Quỳ Hợp",
                id: 420,
                slug: "quy_hop",
            },
            {
                name: "Quỳnh Lưu",
                id: 421,
                slug: "quynh_luu",
            },
            {
                name: "Con Cuông",
                id: 422,
                slug: "con_cuong",
            },
            {
                name: "Tân Kỳ",
                id: 423,
                slug: "tan_ky",
            },
            {
                name: "Anh Sơn",
                id: 424,
                slug: "anh_son",
            },
            {
                name: "Diễn Châu",
                id: 425,
                slug: "dien_chau",
            },
            {
                name: "Yên Thành",
                id: 426,
                slug: "yen_thanh",
            },
            {
                name: "Đô Lương",
                id: 427,
                slug: "do_luong",
            },
            {
                name: "Thanh Chương",
                id: 428,
                slug: "thanh_chuong",
            },
            {
                name: "Nghi Lộc",
                id: 429,
                slug: "nghi_loc",
            },
            {
                name: "Nam Đàn",
                id: 430,
                slug: "nam_dan",
            },
            {
                name: "Hưng Nguyên",
                id: 431,
                slug: "hung_nguyen",
            },
            {
                name: "Hoàng Mai",
                id: 432,
                slug: "hoang_mai",
            }
        ]
    },
    {
        name: "Hà Tĩnh",
        id: 42,
        slug: "ha_tinh",
        districts: [
            {
                name: "Hà Tĩnh",
                id: 436,
                slug: "ha_tinh",
            },
            {
                name: "Hồng Lĩnh",
                id: 437,
                slug: "hong_linh",
            },
            {
                name: "Hương Sơn",
                id: 439,
                slug: "huong_son",
            },
            {
                name: "Đức Thọ",
                id: 440,
                slug: "duc_tho",
            },
            {
                name: "Vũ Quang",
                id: 441,
                slug: "vu_quang",
            },
            {
                name: "Nghi Xuân",
                id: 442,
                slug: "nghi_xuan",
            },
            {
                name: "Can Lộc",
                id: 443,
                slug: "can_loc",
            },
            {
                name: "Hương Khê",
                id: 444,
                slug: "huong_khe",
            },
            {
                name: "Thạch Hà",
                id: 445,
                slug: "thach_ha",
            },
            {
                name: "Cẩm Xuyên",
                id: 446,
                slug: "cam_xuyen",
            },
            {
                name: "Kỳ Anh",
                id: 447,
                slug: "ky_anh",
            },
            {
                name: "Lộc Hà",
                id: 448,
                slug: "loc_ha",
            },
            {
                name: "Kỳ Anh",
                id: 449,
                slug: "ky_anh",
            }
        ]
    },
    {
        name: "Quảng Bình",
        id: 44,
        slug: "quang_binh",
        districts: [
            {
                name: "Thành Phố Đồng Hới",
                id: 450,
                slug: "dong_hoi",
            },
            {
                name: "Minh Hóa",
                id: 452,
                slug: "minh_hoa",
            },
            {
                name: "Tuyên Hóa",
                id: 453,
                slug: "tuyen_hoa",
            },
            {
                name: "Quảng Trạch",
                id: 454,
                slug: "quang_trach",
            },
            {
                name: "Bố Trạch",
                id: 455,
                slug: "bo_trach",
            },
            {
                name: "Quảng Ninh",
                id: 456,
                slug: "quang_ninh",
            },
            {
                name: "Lệ Thủy",
                id: 457,
                slug: "le_thuy",
            },
            {
                name: "Ba Đồn",
                id: 458,
                slug: "ba_don",
            }
        ]
    },
    {
        name: "Quảng Trị",
        id: 45,
        slug: "quang_tri",
        districts: [
            {
                name: "Đông Hà",
                id: 461,
                slug: "dong_ha",
            },
            {
                name: "Quảng Trị",
                id: 462,
                slug: "quang_tri",
            },
            {
                name: "Vĩnh Linh",
                id: 464,
                slug: "vinh_linh",
            },
            {
                name: "Hướng Hóa",
                id: 465,
                slug: "huong_hoa",
            },
            {
                name: "Gio Linh",
                id: 466,
                slug: "gio_linh",
            },
            {
                name: "Đa Krông",
                id: 467,
                slug: "da_krong",
            },
            {
                name: "Cam Lộ",
                id: 468,
                slug: "cam_lo",
            },
            {
                name: "Triệu Phong",
                id: 469,
                slug: "trieu_phong",
            },
            {
                name: "Hải Lăng",
                id: 470,
                slug: "hai_lang",
            },
            {
                name: "Cồn Cỏ",
                id: 471,
                slug: "con_co",
            }
        ]
    },
    {
        name: "Thừa Thiên Huế",
        id: 46,
        slug: "thua_thien_hue",
        districts: [
            {
                name: "Huế",
                id: 474,
                slug: "hue",
            },
            {
                name: "Phong Điền",
                id: 476,
                slug: "phong_dien",
            },
            {
                name: "Quảng Điền",
                id: 477,
                slug: "quang_dien",
            },
            {
                name: "Phú Vang",
                id: 478,
                slug: "phu_vang",
            },
            {
                name: "Hương Thủy",
                id: 479,
                slug: "huong_thuy",
            },
            {
                name: "Hương Trà",
                id: 480,
                slug: "huong_tra",
            },
            {
                name: "A Lưới",
                id: 481,
                slug: "a_luoi",
            },
            {
                name: "Phú Lộc",
                id: 482,
                slug: "phu_loc",
            },
            {
                name: "Nam Đông",
                id: 483,
                slug: "nam_dong",
            }
        ]
    },
    {
        name: "Đà Nẵng",
        id: 48,
        slug: "da_nang",
        districts: [
            {
                name: "Liên Chiểu",
                id: 490,
                slug: "lien_chieu",
            },
            {
                name: "Thanh Khê",
                id: 491,
                slug: "thanh_khe",
            },
            {
                name: "Hải Châu",
                id: 492,
                slug: "hai_chau",
            },
            {
                name: "Sơn Trà",
                id: 493,
                slug: "son_tra",
            },
            {
                name: "Ngũ Hành Sơn",
                id: 494,
                slug: "ngu_hanh_son",
            },
            {
                name: "Cẩm Lệ",
                id: 495,
                slug: "cam_le",
            },
            {
                name: "Hòa Vang",
                id: 497,
                slug: "hoa_vang",
            },
            {
                name: "Hoàng Sa",
                id: 498,
                slug: "hoang_sa",
            }
        ]
    },
    {
        name: "Quảng Nam",
        id: 49,
        slug: "quang_nam",
        districts: [
            {
                name: "Tam Kỳ",
                id: 502,
                slug: "tam_ky",
            },
            {
                name: "Hội An",
                id: 503,
                slug: "hoi_an",
            },
            {
                name: "Tây Giang",
                id: 504,
                slug: "tay_giang",
            },
            {
                name: "Đông Giang",
                id: 505,
                slug: "dong_giang",
            },
            {
                name: "Đại Lộc",
                id: 506,
                slug: "dai_loc",
            },
            {
                name: "Điện Bàn",
                id: 507,
                slug: "dien_ban",
            },
            {
                name: "Duy Xuyên",
                id: 508,
                slug: "duy_xuyen",
            },
            {
                name: "Quế Sơn",
                id: 509,
                slug: "que_son",
            },
            {
                name: "Nam Giang",
                id: 510,
                slug: "nam_giang",
            },
            {
                name: "Phước Sơn",
                id: 511,
                slug: "phuoc_son",
            },
            {
                name: "Hiệp Đức",
                id: 512,
                slug: "hiep_duc",
            },
            {
                name: "Thăng Bình",
                id: 513,
                slug: "thang_binh",
            },
            {
                name: "Tiên Phước",
                id: 514,
                slug: "tien_phuoc",
            },
            {
                name: "Bắc Trà My",
                id: 515,
                slug: "bac_tra_my",
            },
            {
                name: "Nam Trà My",
                id: 516,
                slug: "nam_tra_my",
            },
            {
                name: "Núi Thành",
                id: 517,
                slug: "nui_thanh",
            },
            {
                name: "Phú Ninh",
                id: 518,
                slug: "phu_ninh",
            },
            {
                name: "Nông Sơn",
                id: 519,
                slug: "nong_son",
            }
        ]
    },
    {
        name: "Quảng Ngãi",
        id: 51,
        slug: "quang_ngai",
        districts: [
            {
                name: "Quảng Ngãi",
                id: 522,
                slug: "quang_ngai",
            },
            {
                name: "Bình Sơn",
                id: 524,
                slug: "binh_son",
            },
            {
                name: "Trà Bồng",
                id: 525,
                slug: "tra_bong",
            },
            {
                name: "Sơn Tịnh",
                id: 527,
                slug: "son_tinh",
            },
            {
                name: "Tư Nghĩa",
                id: 528,
                slug: "tu_nghia",
            },
            {
                name: "Sơn Hà",
                id: 529,
                slug: "son_ha",
            },
            {
                name: "Sơn Tây",
                id: 530,
                slug: "son_tay",
            },
            {
                name: "Minh Long",
                id: 531,
                slug: "minh_long",
            },
            {
                name: "Nghĩa Hành",
                id: 532,
                slug: "nghia_hanh",
            },
            {
                name: "Mộ Đức",
                id: 533,
                slug: "mo_duc",
            },
            {
                name: "Đức Phổ",
                id: 534,
                slug: "duc_pho",
            },
            {
                name: "Ba Tơ",
                id: 535,
                slug: "ba_to",
            },
            {
                name: "Lý Sơn",
                id: 536,
                slug: "ly_son",
            }
        ]
    },
    {
        name: "Bình Định",
        id: 52,
        slug: "binh_dinh",
        districts: [
            {
                name: "Quy Nhơn",
                id: 540,
                slug: "quy_nhon",
            },
            {
                name: "An Lão",
                id: 542,
                slug: "an_lao",
            },
            {
                name: "Hoài Nhơn",
                id: 543,
                slug: "hoai_nhon",
            },
            {
                name: "Hoài Ân",
                id: 544,
                slug: "hoai_an",
            },
            {
                name: "Phù Mỹ",
                id: 545,
                slug: "phu_my",
            },
            {
                name: "Vĩnh Thạnh",
                id: 546,
                slug: "vinh_thanh",
            },
            {
                name: "Tây Sơn",
                id: 547,
                slug: "tay_son",
            },
            {
                name: "Phù Cát",
                id: 548,
                slug: "phu_cat",
            },
            {
                name: "An Nhơn",
                id: 549,
                slug: "an_nhon",
            },
            {
                name: "Tuy Phước",
                id: 550,
                slug: "tuy_phuoc",
            },
            {
                name: "Vân Canh",
                id: 551,
                slug: "van_canh",
            }
        ]
    },
    {
        name: "Phú Yên",
        id: 54,
        slug: "phu_yen",
        districts: [
            {
                name: "Tuy Hoà",
                id: 555,
                slug: "tuy_hoa",
            },
            {
                name: "Sông Cầu",
                id: 557,
                slug: "song_cau",
            },
            {
                name: "Đồng Xuân",
                id: 558,
                slug: "dong_xuan",
            },
            {
                name: "Tuy An",
                id: 559,
                slug: "tuy_an",
            },
            {
                name: "Sơn Hòa",
                id: 560,
                slug: "son_hoa",
            },
            {
                name: "Sông Hinh",
                id: 561,
                slug: "song_hinh",
            },
            {
                name: "Tây Hoà",
                id: 562,
                slug: "tay_hoa",
            },
            {
                name: "Phú Hoà",
                id: 563,
                slug: "phu_hoa",
            },
            {
                name: "Đông Hòa",
                id: 564,
                slug: "dong_hoa",
            }
        ]
    },
    {
        name: "Khánh Hòa",
        id: 56,
        slug: "khanh_hoa",
        districts: [
            {
                name: "Nha Trang",
                id: 568,
                slug: "nha_trang",
            },
            {
                name: "Cam Ranh",
                id: 569,
                slug: "cam_ranh",
            },
            {
                name: "Cam Lâm",
                id: 570,
                slug: "cam_lam",
            },
            {
                name: "Vạn Ninh",
                id: 571,
                slug: "van_ninh",
            },
            {
                name: "Ninh Hòa",
                id: 572,
                slug: "ninh_hoa",
            },
            {
                name: "Khánh Vĩnh",
                id: 573,
                slug: "khanh_vinh",
            },
            {
                name: "Diên Khánh",
                id: 574,
                slug: "dien_khanh",
            },
            {
                name: "Khánh Sơn",
                id: 575,
                slug: "khanh_son",
            },
            {
                name: "Trường Sa",
                id: 576,
                slug: "truong_sa",
            }
        ]
    },
    {
        name: "Ninh Thuận",
        id: 58,
        slug: "ninh_thuan",
        districts: [
            {
                name: "Phan Rang-Tháp Chàm",
                id: 582,
                slug: "phan_rang_thap_cham",
            },
            {
                name: "Bác Ái",
                id: 584,
                slug: "bac_ai",
            },
            {
                name: "Ninh Sơn",
                id: 585,
                slug: "ninh_son",
            },
            {
                name: "Ninh Hải",
                id: 586,
                slug: "ninh_hai",
            },
            {
                name: "Ninh Phước",
                id: 587,
                slug: "ninh_phuoc",
            },
            {
                name: "Thuận Bắc",
                id: 588,
                slug: "thuan_bac",
            },
            {
                name: "Thuận Nam",
                id: 589,
                slug: "thuan_nam",
            }
        ]
    },
    {
        name: "Bình Thuận",
        id: 60,
        slug: "binh_thuan",
        districts: [
            {
                name: "Phan Thiết",
                id: 593,
                slug: "phan_thiet",
            },
            {
                name: "La Gi",
                id: 594,
                slug: "la_gi",
            },
            {
                name: "Tuy Phong",
                id: 595,
                slug: "tuy_phong",
            },
            {
                name: "Bắc Bình",
                id: 596,
                slug: "bac_binh",
            },
            {
                name: "Hàm Thuận Bắc",
                id: 597,
                slug: "ham_thuan_bac",
            },
            {
                name: "Hàm Thuận Nam",
                id: 598,
                slug: "ham_thuan_nam",
            },
            {
                name: "Tánh Linh",
                id: 599,
                slug: "tanh_linh",
            },
            {
                name: "Đức Linh",
                id: 600,
                slug: "duc_linh",
            },
            {
                name: "Hàm Tân",
                id: 601,
                slug: "ham_tan",
            },
            {
                name: "Phú Quí",
                id: 602,
                slug: "phu_qui",
            }
        ]
    },
    {
        name: "Kon Tum",
        id: 62,
        slug: "kon_tum",
        districts: [
            {
                name: "Kon Tum",
                id: 608,
                slug: "kon_tum",
            },
            {
                name: "Đắk Glei",
                id: 610,
                slug: "dak_glei",
            },
            {
                name: "Ngọc Hồi",
                id: 611,
                slug: "ngoc_hoi",
            },
            {
                name: "Đắk Tô",
                id: 612,
                slug: "dak_to",
            },
            {
                name: "Kon Plông",
                id: 613,
                slug: "kon_plong",
            },
            {
                name: "Kon Rẫy",
                id: 614,
                slug: "kon_ray",
            },
            {
                name: "Đắk Hà",
                id: 615,
                slug: "dak_ha",
            },
            {
                name: "Sa Thầy",
                id: 616,
                slug: "sa_thay",
            },
            {
                name: "Tu Mơ Rông",
                id: 617,
                slug: "tu_mo_rong",
            },
            {
                name: "Ia H' Drai",
                id: 618,
                slug: "ia_h_drai",
            }
        ]
    },
    {
        name: "Gia Lai",
        id: 64,
        slug: "gia_lai",
        districts: [
            {
                name: "Pleiku",
                id: 622,
                slug: "pleiku",
            },
            {
                name: "An Khê",
                id: 623,
                slug: "an_khe",
            },
            {
                name: "Ayun Pa",
                id: 624,
                slug: "ayun_pa",
            },
            {
                name: "KBang",
                id: 625,
                slug: "kbang",
            },
            {
                name: "Đăk Đoa",
                id: 626,
                slug: "dak_doa",
            },
            {
                name: "Chư Păh",
                id: 627,
                slug: "chu_pah",
            },
            {
                name: "Ia Grai",
                id: 628,
                slug: "ia_grai",
            },
            {
                name: "Mang Yang",
                id: 629,
                slug: "mang_yang",
            },
            {
                name: "Kông Chro",
                id: 630,
                slug: "kong_chro",
            },
            {
                name: "Đức Cơ",
                id: 631,
                slug: "duc_co",
            },
            {
                name: "Chư Prông",
                id: 632,
                slug: "chu_prong",
            },
            {
                name: "Chư Sê",
                id: 633,
                slug: "chu_se",
            },
            {
                name: "Đăk Pơ",
                id: 634,
                slug: "dak_po",
            },
            {
                name: "Ia Pa",
                id: 635,
                slug: "ia_pa",
            },
            {
                name: "Krông Pa",
                id: 637,
                slug: "krong_pa",
            },
            {
                name: "Phú Thiện",
                id: 638,
                slug: "phu_thien",
            },
            {
                name: "Chư Pưh",
                id: 639,
                slug: "chu_puh",
            }
        ]
    },
    {
        name: "Đắk Lắk",
        id: 66,
        slug: "dak_lak",
        districts: [
            {
                name: "Buôn Ma Thuột",
                id: 643,
                slug: "buon_ma_thuot",
            },
            {
                name: "Buôn Hồ",
                id: 644,
                slug: "buon_ho",
            },
            {
                name: "Ea H'leo",
                id: 645,
                slug: "ea_hleo",
            },
            {
                name: "Ea Súp",
                id: 646,
                slug: "ea_sup",
            },
            {
                name: "Buôn Đôn",
                id: 647,
                slug: "buon_don",
            },
            {
                name: "Cư M'gar",
                id: 648,
                slug: "cu_mgar",
            },
            {
                name: "Krông Búk",
                id: 649,
                slug: "krong_buk",
            },
            {
                name: "Krông Năng",
                id: 650,
                slug: "krong_nang",
            },
            {
                name: "Ea Kar",
                id: 651,
                slug: "ea_kar",
            },
            {
                name: "M'Đrắk",
                id: 652,
                slug: "mdrak",
            },
            {
                name: "Krông Bông",
                id: 653,
                slug: "krong_bong",
            },
            {
                name: "Krông Pắc",
                id: 654,
                slug: "krong_pac",
            },
            {
                name: "Krông A Na",
                id: 655,
                slug: "krong_a_na",
            },
            {
                name: "Lắk",
                id: 656,
                slug: "lak",
            },
            {
                name: "Cư Kuin",
                id: 657,
                slug: "cu_kuin",
            }
        ]
    },
    {
        name: "Đắk Nông",
        id: 67,
        slug: "dak_nong",
        districts: [
            {
                name: "Gia Nghĩa",
                id: 660,
                slug: "gia_nghia",
            },
            {
                name: "Đăk Glong",
                id: 661,
                slug: "dak_glong",
            },
            {
                name: "Cư Jút",
                id: 662,
                slug: "cu_jut",
            },
            {
                name: "Đắk Mil",
                id: 663,
                slug: "dak_mil",
            },
            {
                name: "Krông Nô",
                id: 664,
                slug: "krong_no",
            },
            {
                name: "Đắk Song",
                id: 665,
                slug: "dak_song",
            },
            {
                name: "Đắk R'Lấp",
                id: 666,
                slug: "dak_rlap",
            },
            {
                name: "Tuy Đức",
                id: 667,
                slug: "tuy_duc",
            }
        ]
    },
    {
        name: "Lâm Đồng",
        id: 68,
        slug: "lam_dong",
        districts: [
            {
                name: "Đà Lạt",
                id: 672,
                slug: "da_lat",
            },
            {
                name: "Bảo Lộc",
                id: 673,
                slug: "bao_loc",
            },
            {
                name: "Đam Rông",
                id: 674,
                slug: "dam_rong",
            },
            {
                name: "Lạc Dương",
                id: 675,
                slug: "lac_duong",
            },
            {
                name: "Lâm Hà",
                id: 676,
                slug: "lam_ha",
            },
            {
                name: "Đơn Dương",
                id: 677,
                slug: "don_duong",
            },
            {
                name: "Đức Trọng",
                id: 678,
                slug: "duc_trong",
            },
            {
                name: "Di Linh",
                id: 679,
                slug: "di_linh",
            },
            {
                name: "Bảo Lâm",
                id: 680,
                slug: "bao_lam",
            },
            {
                name: "Đạ Huoai",
                id: 681,
                slug: "da_huoai",
            },
            {
                name: "Đạ Tẻh",
                id: 682,
                slug: "da_teh",
            },
            {
                name: "Cát Tiên",
                id: 683,
                slug: "cat_tien",
            }
        ]
    },
    {
        name: "Bình Phước",
        id: 70,
        slug: "binh_phuoc",
        districts: [
            {
                name: "Phước Long",
                id: 688,
                slug: "phuoc_long",
            },
            {
                name: "Đồng Xoài",
                id: 689,
                slug: "dong_xoai",
            },
            {
                name: "Bình Long",
                id: 690,
                slug: "binh_long",
            },
            {
                name: "Bù Gia Mập",
                id: 691,
                slug: "bu_gia_map",
            },
            {
                name: "Lộc Ninh",
                id: 692,
                slug: "loc_ninh",
            },
            {
                name: "Bù Đốp",
                id: 693,
                slug: "bu_dop",
            },
            {
                name: "Hớn Quản",
                id: 694,
                slug: "hon_quan",
            },
            {
                name: "Đồng Phú",
                id: 695,
                slug: "dong_phu",
            },
            {
                name: "Bù Đăng",
                id: 696,
                slug: "bu_dang",
            },
            {
                name: "Chơn Thành",
                id: 697,
                slug: "chon_thanh",
            },
            {
                name: "Phú Riềng",
                id: 698,
                slug: "phu_rieng",
            }
        ]
    },
    {
        name: "Tây Ninh",
        id: 72,
        slug: "tay_ninh",
        districts: [
            {
                name: "Tây Ninh",
                id: 703,
                slug: "tay_ninh",
            },
            {
                name: "Tân Biên",
                id: 705,
                slug: "tan_bien",
            },
            {
                name: "Tân Châu",
                id: 706,
                slug: "tan_chau",
            },
            {
                name: "Dương Minh Châu",
                id: 707,
                slug: "duong_minh_chau",
            },
            {
                name: "Châu Thành",
                id: 708,
                slug: "chau_thanh",
            },
            {
                name: "Hòa Thành",
                id: 709,
                slug: "hoa_thanh",
            },
            {
                name: "Gò Dầu",
                id: 710,
                slug: "go_dau",
            },
            {
                name: "Bến Cầu",
                id: 711,
                slug: "ben_cau",
            },
            {
                name: "Trảng Bàng",
                id: 712,
                slug: "trang_bang",
            }
        ]
    },
    {
        name: "Bình Dương",
        id: 74,
        slug: "binh_duong",
        districts: [
            {
                name: "Thủ Dầu Một",
                id: 718,
                slug: "thu_dau_mot",
            },
            {
                name: "Bàu Bàng",
                id: 719,
                slug: "bau_bang",
            },
            {
                name: "Dầu Tiếng",
                id: 720,
                slug: "dau_tieng",
            },
            {
                name: "Bến Cát",
                id: 721,
                slug: "ben_cat",
            },
            {
                name: "Phú Giáo",
                id: 722,
                slug: "phu_giao",
            },
            {
                name: "Tân Uyên",
                id: 723,
                slug: "tan_uyen",
            },
            {
                name: "Dĩ An",
                id: 724,
                slug: "di_an",
            },
            {
                name: "Thuận An",
                id: 725,
                slug: "thuan_an",
            },
            {
                name: "Bắc Tân Uyên",
                id: 726,
                slug: "bac_tan_uyen",
            }
        ]
    },
    {
        name: "Đồng Nai",
        id: 75,
        slug: "dong_nai",
        districts: [
            {
                name: "Biên Hòa",
                id: 731,
                slug: "bien_hoa",
            },
            {
                name: "Long Khánh",
                id: 732,
                slug: "long_khanh",
            },
            {
                name: "Tân Phú",
                id: 734,
                slug: "tan_phu",
            },
            {
                name: "Vĩnh Cửu",
                id: 735,
                slug: "vinh_cuu",
            },
            {
                name: "Định Quán",
                id: 736,
                slug: "dinh_quan",
            },
            {
                name: "Trảng Bom",
                id: 737,
                slug: "trang_bom",
            },
            {
                name: "Thống Nhất",
                id: 738,
                slug: "thong_nhat",
            },
            {
                name: "Cẩm Mỹ",
                id: 739,
                slug: "cam_my",
            },
            {
                name: "Long Thành",
                id: 740,
                slug: "long_thanh",
            },
            {
                name: "Xuân Lộc",
                id: 741,
                slug: "xuan_loc",
            },
            {
                name: "Nhơn Trạch",
                id: 742,
                slug: "nhon_trach",
            }
        ]
    },
    {
        name: "Bà Rịa - Vũng Tàu",
        id: 77,
        slug: "ba_ria_vung_tau",
        districts: [
            {
                name: "Vũng Tàu",
                id: 747,
                slug: "vung_tau",
            },
            {
                name: "Bà Rịa",
                id: 748,
                slug: "ba_ria",
            },
            {
                name: "Châu Đức",
                id: 750,
                slug: "chau_duc",
            },
            {
                name: "Xuyên Mộc",
                id: 751,
                slug: "xuyen_moc",
            },
            {
                name: "Long Điền",
                id: 752,
                slug: "long_dien",
            },
            {
                name: "Đất Đỏ",
                id: 753,
                slug: "dat_do",
            },
            {
                name: "Phú Mỹ",
                id: 754,
                slug: "phu_my",
            },
            {
                name: "Côn Đảo",
                id: 755,
                slug: "con_dao",
            }
        ]
    },
    {
        name: "Hồ Chí Minh",
        id: 79,
        slug: "ho_chi_minh",
        districts: [
            {
                name: "1",
                id: 760,
                slug: "1",
            },
            {
                name: "12",
                id: 761,
                slug: "12",
            },
            {
                name: "Gò Vấp",
                id: 764,
                slug: "go_vap",
            },
            {
                name: "Bình Thạnh",
                id: 765,
                slug: "binh_thanh",
            },
            {
                name: "Tân Bình",
                id: 766,
                slug: "tan_binh",
            },
            {
                name: "Tân Phú",
                id: 767,
                slug: "tan_phu",
            },
            {
                name: "Phú Nhuận",
                id: 768,
                slug: "phu_nhuan",
            },
            {
                name: "Thủ Đức",
                id: 769,
                slug: "thu_duc",
            },
            {
                name: "3",
                id: 770,
                slug: "3",
            },
            {
                name: "10",
                id: 771,
                slug: "10",
            },
            {
                name: "11",
                id: 772,
                slug: "11",
            },
            {
                name: "4",
                id: 773,
                slug: "4",
            },
            {
                name: "5",
                id: 774,
                slug: "5",
            },
            {
                name: "6",
                id: 775,
                slug: "6",
            },
            {
                name: "8",
                id: 776,
                slug: "8",
            },
            {
                name: "Bình Tân",
                id: 777,
                slug: "binh_tan",
            },
            {
                name: "7",
                id: 778,
                slug: "7",
            },
            {
                name: "Củ Chi",
                id: 783,
                slug: "cu_chi",
            },
            {
                name: "Hóc Môn",
                id: 784,
                slug: "hoc_mon",
            },
            {
                name: "Bình Chánh",
                id: 785,
                slug: "binh_chanh",
            },
            {
                name: "Nhà Bè",
                id: 786,
                slug: "nha_be",
            },
            {
                name: "Cần Giờ",
                id: 787,
                slug: "can_gio",
            }
        ]
    },
    {
        name: "Long An",
        id: 80,
        slug: "long_an",
        districts: [
            {
                name: "Tân An",
                id: 794,
                slug: "tan_an",
            },
            {
                name: "Kiến Tường",
                id: 795,
                slug: "kien_tuong",
            },
            {
                name: "Tân Hưng",
                id: 796,
                slug: "tan_hung",
            },
            {
                name: "Vĩnh Hưng",
                id: 797,
                slug: "vinh_hung",
            },
            {
                name: "Mộc Hóa",
                id: 798,
                slug: "moc_hoa",
            },
            {
                name: "Tân Thạnh",
                id: 799,
                slug: "tan_thanh",
            },
            {
                name: "Thạnh Hóa",
                id: 800,
                slug: "thanh_hoa",
            },
            {
                name: "Đức Huệ",
                id: 801,
                slug: "duc_hue",
            },
            {
                name: "Đức Hòa",
                id: 802,
                slug: "duc_hoa",
            },
            {
                name: "Bến Lức",
                id: 803,
                slug: "ben_luc",
            },
            {
                name: "Thủ Thừa",
                id: 804,
                slug: "thu_thua",
            },
            {
                name: "Tân Trụ",
                id: 805,
                slug: "tan_tru",
            },
            {
                name: "Cần Đước",
                id: 806,
                slug: "can_duoc",
            },
            {
                name: "Cần Giuộc",
                id: 807,
                slug: "can_giuoc",
            },
            {
                name: "Châu Thành",
                id: 808,
                slug: "chau_thanh",
            }
        ]
    },
    {
        name: "Tiền Giang",
        id: 82,
        slug: "tien_giang",
        districts: [
            {
                name: "Mỹ Tho",
                id: 815,
                slug: "my_tho",
            },
            {
                name: "Gò Công",
                id: 816,
                slug: "go_cong",
            },
            {
                name: "Cai Lậy",
                id: 817,
                slug: "cai_lay",
            },
            {
                name: "Tân Phước",
                id: 818,
                slug: "tan_phuoc",
            },
            {
                name: "Cái Bè",
                id: 819,
                slug: "cai_be",
            },
            {
                name: "Cai Lậy",
                id: 820,
                slug: "cai_lay",
            },
            {
                name: "Châu Thành",
                id: 821,
                slug: "chau_thanh",
            },
            {
                name: "Chợ Gạo",
                id: 822,
                slug: "cho_gao",
            },
            {
                name: "Gò Công Tây",
                id: 823,
                slug: "go_cong_tay",
            },
            {
                name: "Gò Công Đông",
                id: 824,
                slug: "go_cong_dong",
            },
            {
                name: "Tân Phú Đông",
                id: 825,
                slug: "tan_phu_dong",
            }
        ]
    },
    {
        name: "Bến Tre",
        id: 83,
        slug: "ben_tre",
        districts: [
            {
                name: "Bến Tre",
                id: 829,
                slug: "ben_tre",
            },
            {
                name: "Châu Thành",
                id: 831,
                slug: "chau_thanh",
            },
            {
                name: "Chợ Lách",
                id: 832,
                slug: "cho_lach",
            },
            {
                name: "Mỏ Cày Nam",
                id: 833,
                slug: "mo_cay_nam",
            },
            {
                name: "Giồng Trôm",
                id: 834,
                slug: "giong_trom",
            },
            {
                name: "Bình Đại",
                id: 835,
                slug: "binh_dai",
            },
            {
                name: "Ba Tri",
                id: 836,
                slug: "ba_tri",
            },
            {
                name: "Thạnh Phú",
                id: 837,
                slug: "thanh_phu",
            },
            {
                name: "Mỏ Cày Bắc",
                id: 838,
                slug: "mo_cay_bac",
            }
        ]
    },
    {
        name: "Trà Vinh",
        id: 84,
        slug: "tra_vinh",
        districts: [
            {
                name: "Trà Vinh",
                id: 842,
                slug: "tra_vinh",
            },
            {
                name: "Càng Long",
                id: 844,
                slug: "cang_long",
            },
            {
                name: "Cầu Kè",
                id: 845,
                slug: "cau_ke",
            },
            {
                name: "Tiểu Cần",
                id: 846,
                slug: "tieu_can",
            },
            {
                name: "Châu Thành",
                id: 847,
                slug: "chau_thanh",
            },
            {
                name: "Cầu Ngang",
                id: 848,
                slug: "cau_ngang",
            },
            {
                name: "Trà Cú",
                id: 849,
                slug: "tra_cu",
            },
            {
                name: "Duyên Hải",
                id: 850,
                slug: "duyen_hai",
            },
            {
                name: "Duyên Hải",
                id: 851,
                slug: "duyen_hai",
            }
        ]
    },
    {
        name: "Vĩnh Long",
        id: 86,
        slug: "vinh_long",
        districts: [
            {
                name: "Vĩnh Long",
                id: 855,
                slug: "vinh_long",
            },
            {
                name: "Long Hồ",
                id: 857,
                slug: "long_ho",
            },
            {
                name: "Mang Thít",
                id: 858,
                slug: "mang_thit",
            },
            {
                name: "Vũng Liêm",
                id: 859,
                slug: "vung_liem",
            },
            {
                name: "Tam Bình",
                id: 860,
                slug: "tam_binh",
            },
            {
                name: "Bình Minh",
                id: 861,
                slug: "binh_minh",
            },
            {
                name: "Trà Ôn",
                id: 862,
                slug: "tra_on",
            },
            {
                name: "Bình Tân",
                id: 863,
                slug: "binh_tan",
            }
        ]
    },
    {
        name: "Đồng Tháp",
        id: 87,
        slug: "dong_thap",
        districts: [
            {
                name: "Cao Lãnh",
                id: 866,
                slug: "cao_lanh",
            },
            {
                name: "Sa Đéc",
                id: 867,
                slug: "sa_dec",
            },
            {
                name: "Hồng Ngự",
                id: 868,
                slug: "hong_ngu",
            },
            {
                name: "Tân Hồng",
                id: 869,
                slug: "tan_hong",
            },
            {
                name: "Hồng Ngự",
                id: 870,
                slug: "hong_ngu",
            },
            {
                name: "Tam Nông",
                id: 871,
                slug: "tam_nong",
            },
            {
                name: "Tháp Mười",
                id: 872,
                slug: "thap_muoi",
            },
            {
                name: "Cao Lãnh",
                id: 873,
                slug: "cao_lanh",
            },
            {
                name: "Thanh Bình",
                id: 874,
                slug: "thanh_binh",
            },
            {
                name: "Lấp Vò",
                id: 875,
                slug: "lap_vo",
            },
            {
                name: "Lai Vung",
                id: 876,
                slug: "lai_vung",
            },
            {
                name: "Châu Thành",
                id: 877,
                slug: "chau_thanh",
            }
        ]
    },
    {
        name: "An Giang",
        id: 89,
        slug: "an_giang",
        districts: [
            {
                name: "Long Xuyên",
                id: 883,
                slug: "long_xuyen",
            },
            {
                name: "Châu Đốc",
                id: 884,
                slug: "chau_doc",
            },
            {
                name: "An Phú",
                id: 886,
                slug: "an_phu",
            },
            {
                name: "Tân Châu",
                id: 887,
                slug: "tan_chau",
            },
            {
                name: "Phú Tân",
                id: 888,
                slug: "phu_tan",
            },
            {
                name: "Châu Phú",
                id: 889,
                slug: "chau_phu",
            },
            {
                name: "Tịnh Biên",
                id: 890,
                slug: "bien",
            },
            {
                name: "Tri Tôn",
                id: 891,
                slug: "tri_ton",
            },
            {
                name: "Châu Thành",
                id: 892,
                slug: "chau_thanh",
            },
            {
                name: "Chợ Mới",
                id: 893,
                slug: "cho_moi",
            },
            {
                name: "Thoại Sơn",
                id: 894,
                slug: "thoai_son",
            }
        ]
    },
    {
        name: "Kiên Giang",
        id: 91,
        slug: "kien_giang",
        districts: [
            {
                name: "Rạch Giá",
                id: 899,
                slug: "rach_gia",
            },
            {
                name: "Hà Tiên",
                id: 900,
                slug: "ha_tien",
            },
            {
                name: "Kiên Lương",
                id: 902,
                slug: "kien_luong",
            },
            {
                name: "Hòn Đất",
                id: 903,
                slug: "hon_dat",
            },
            {
                name: "Tân Hiệp",
                id: 904,
                slug: "tan_hiep",
            },
            {
                name: "Châu Thành",
                id: 905,
                slug: "chau_thanh",
            },
            {
                name: "Giồng Riềng",
                id: 906,
                slug: "giong_rieng",
            },
            {
                name: "Gò Quao",
                id: 907,
                slug: "go_quao",
            },
            {
                name: "An Biên",
                id: 908,
                slug: "an_bien",
            },
            {
                name: "An Minh",
                id: 909,
                slug: "an_minh",
            },
            {
                name: "Vĩnh Thuận",
                id: 910,
                slug: "vinh_thuan",
            },
            {
                name: "Phú Quốc",
                id: 911,
                slug: "phu_quoc",
            },
            {
                name: "Kiên Hải",
                id: 912,
                slug: "kien_hai",
            },
            {
                name: "U Minh Thượng",
                id: 913,
                slug: "u_minh_thuong",
            },
            {
                name: "Giang Thành",
                id: 914,
                slug: "giang_thanh",
            }
        ]
    },
    {
        name: "Cần Thơ",
        id: 92,
        slug: "can_tho",
        districts: [
            {
                name: "Ninh Kiều",
                id: 916,
                slug: "ninh_kieu",
            },
            {
                name: "Ô Môn",
                id: 917,
                slug: "o_mon",
            },
            {
                name: "Bình Thuỷ",
                id: 918,
                slug: "binh_thuy",
            },
            {
                name: "Cái Răng",
                id: 919,
                slug: "cai_rang",
            },
            {
                name: "Thốt Nốt",
                id: 923,
                slug: "thot_not",
            },
            {
                name: "Vĩnh Thạnh",
                id: 924,
                slug: "vinh_thanh",
            },
            {
                name: "Cờ Đỏ",
                id: 925,
                slug: "co_do",
            },
            {
                name: "Phong Điền",
                id: 926,
                slug: "phong_dien",
            },
            {
                name: "Thới Lai",
                id: 927,
                slug: "thoi_lai",
            }
        ]
    },
    {
        name: "Hậu Giang",
        id: 93,
        slug: "hau_giang",
        districts: [
            {
                name: "Vị Thanh",
                id: 930,
                slug: "vi_thanh",
            },
            {
                name: "Ngã Bảy",
                id: 931,
                slug: "nga_bay",
            },
            {
                name: "Châu Thành A",
                id: 932,
                slug: "chau_thanh_a",
            },
            {
                name: "Châu Thành",
                id: 933,
                slug: "chau_thanh",
            },
            {
                name: "Phụng Hiệp",
                id: 934,
                slug: "phung_hiep",
            },
            {
                name: "Vị Thuỷ",
                id: 935,
                slug: "vi_thuy",
            },
            {
                name: "Long Mỹ",
                id: 936,
                slug: "long_my",
            },
            {
                name: "Long Mỹ",
                id: 937,
                slug: "long_my",
            }
        ]
    },
    {
        name: "Sóc Trăng",
        id: 94,
        slug: "soc_trang",
        districts: [
            {
                name: "Sóc Trăng",
                id: 941,
                slug: "soc_trang",
            },
            {
                name: "Châu Thành",
                id: 942,
                slug: "chau_thanh",
            },
            {
                name: "Kế Sách",
                id: 943,
                slug: "ke_sach",
            },
            {
                name: "Mỹ Tú",
                id: 944,
                slug: "my_tu",
            },
            {
                name: "Cù Lao Dung",
                id: 945,
                slug: "cu_lao_dung",
            },
            {
                name: "Long Phú",
                id: 946,
                slug: "long_phu",
            },
            {
                name: "Mỹ Xuyên",
                id: 947,
                slug: "my_xuyen",
            },
            {
                name: "Ngã Năm",
                id: 948,
                slug: "nga_nam",
            },
            {
                name: "Thạnh Trị",
                id: 949,
                slug: "thanh_tri",
            },
            {
                name: "Vĩnh Châu",
                id: 950,
                slug: "vinh_chau",
            },
            {
                name: "Trần Đề",
                id: 951,
                slug: "tran_de",
            }
        ]
    },
    {
        name: "Bạc Liêu",
        id: 95,
        slug: "bac_lieu",
        districts: [
            {
                name: "Bạc Liêu",
                id: 954,
                slug: "bac_lieu",
            },
            {
                name: "Hồng Dân",
                id: 956,
                slug: "hong_dan",
            },
            {
                name: "Phước Long",
                id: 957,
                slug: "phuoc_long",
            },
            {
                name: "Vĩnh Lợi",
                id: 958,
                slug: "vinh_loi",
            },
            {
                name: "Giá Rai",
                id: 959,
                slug: "gia_rai",
            },
            {
                name: "Đông Hải",
                id: 960,
                slug: "dong_hai",
            },
            {
                name: "Hoà Bình",
                id: 961,
                slug: "hoa_binh",
            }
        ]
    },
    {
        name: "Cà Mau",
        id: 96,
        slug: "ca_mau",
        districts: [
            {
                name: "Cà Mau",
                id: 964,
                slug: "ca_mau",
            },
            {
                name: "U Minh",
                id: 966,
                slug: "u_minh",
            },
            {
                name: "Thới Bình",
                id: 967,
                slug: "thoi_binh",
            },
            {
                name: "Trần Văn Thời",
                id: 968,
                slug: "tran_van_thoi",
            },
            {
                name: "Cái Nước",
                id: 969,
                slug: "cai_nuoc",
            },
            {
                name: "Đầm Dơi",
                id: 970,
                slug: "dam_doi",
            },
            {
                name: "Năm Căn",
                id: 971,
                slug: "nam_can",
            },
            {
                name: "Phú Tân",
                id: 972,
                slug: "phu_tan",
            },
            {
                name: "Ngọc Hiển",
                id: 973,
                slug: "ngoc_hien",
            }
        ]
    }
]

export default async function getLocationList() {
    return locationList
}

