import measurement_icon from '@/src/assets/category_icons/measurement.svg'
import digit_icon from '@/src/assets/category_icons/digit.svg'
import figure_icon from '@/src/assets/category_icons/figure.svg'
import greek_icon from '@/src/assets/category_icons/greek.svg'
import cardinal_icon from '@/src/assets/category_icons/cardinal.svg'
import polygons_icon from '@/src/assets/category_icons/polygons.svg'
import large_nums_icon from '@/src/assets/category_icons/large_num.svg'
import prefixes_icon from '@/src/assets/category_icons/prefixes.svg'
import fraction_icon from '@/src/assets/category_icons/fraction.svg'
import ordinal_nums_icon from '@/src/assets/category_icons/ordinal.svg'
import roots_icon from '@/src/assets/category_icons/roots.svg'
import trigonometry_icon from '@/src/assets/category_icons/sinusoid.svg'

const categoryButtons = {
  buttons: [
    {
      id: 1,
      name: 'measurement',
      icon: measurement_icon,
      srb_name: 'мерне јединице',
      srb_name_lat: 'merne jedinice',
      eng_name: 'units of measurement'
    },
    {
      id: 2,
      name: 'digit',
      icon: digit_icon,
      srb_name: 'месна вредност цифре',
      srb_name_lat: 'mesna vrednost cifre',
      eng_name: 'place value of digit'
    },
    {
      id: 3,
      name: 'figures',
      icon: figure_icon,
      srb_name: 'називи геометријских фигура и тела',
      srb_name_lat: 'nazivi geometrijskih figura i tela',
      eng_name: 'names of geometric figures and solids'
    },
    {
      id: 4,
      name: 'greek',
      icon: greek_icon,
      srb_name: 'грчки алфабет',
      srb_name_lat: 'grčki alfabet',
      eng_name: 'greek alphabet'
    },
    {
      id: 5,
      name: 'cardinals',
      icon: cardinal_icon,
      srb_name_lat: 'kardinalni brojevi',
      srb_name: 'кардинални бројеви',
      eng_name: 'cardinal numbers'
    },
    {
      id: 6,
      name: 'polygons',
      icon: polygons_icon,
      srb_name_lat: 'nazivi mnogougla',
      srb_name: 'називи многоугла',
      eng_name: 'names of polygons'
    },
    {
      id: 7,
      name: 'large-nums',
      icon: large_nums_icon,
      srb_name_lat: 'nazivi velikih brojeva',
      srb_name: 'називи великих бројева',
      eng_name: 'names of large numbers'
    },
    {
      id: 8,
      name: 'prefixes',
      icon: prefixes_icon,
      srb_name_lat: 'prefiksi mernih jedinica',
      srb_name: 'префикси мерних јединица',
      eng_name: 'prefixes for units of measurement'
    },
    {
      id: 9,
      name: 'fraction',
      icon: fraction_icon,
      srb_name_lat: 'razlomci',
      srb_name: 'разломци',
      eng_name: 'fractions'
    },
    {
      id: 10,
      name: 'ordinal-num',
      icon: ordinal_nums_icon,
      srb_name_lat: 'redni brojevi',
      srb_name: 'редни бројеви',
      eng_name: 'ordinal numbers'
    },
    {
      id: 11,
      name: 'power-roots',
      icon: roots_icon,
      srb_name_lat: 'stepenovanje i korenovanje',
      srb_name: 'степеновање и кореновање',
      eng_name: 'exponents and radicals (roots)'
    },
    {
      id: 12,
      name: 'trigonometry',
      icon: trigonometry_icon,
      srb_name_lat: 'trigonometrija',
      srb_name: 'тригонометрија',
      eng_name: 'trigonometry'
    }    
  ]
}

export default categoryButtons