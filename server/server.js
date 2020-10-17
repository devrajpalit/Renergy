const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/v1/get-temps', function (req, res) {
  return res.send(
    [['2020-08-31 00,00,00', 'FourthVAV-42', 19.820206, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.881683, 'FourthRHC-1-T', 23.141218, 'FourthVAV-47', 21.492462, 'FourthVAV-49', 23.006134, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.54248, 'FourthVAV-45', 20.728424],
    ['2020-08-31 00,10,00', 'FourthVAV-42', 19.800985, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.852844, 'FourthRHC-1-T', 23.091698333333333, 'FourthVAV-47', 21.492462, 'FourthVAV-49', 23.006134, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.54248, 'FourthVAV-45', 20.709203000000002],
    ['2020-08-31 00,20,00', 'FourthVAV-42', 19.781764, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.824036, 'FourthRHC-1-T', 23.042178666666665, 'FourthVAV-47', 21.492462, 'FourthVAV-49', 23.006134, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.54248, 'FourthVAV-45', 20.689982],
    ['2020-08-31 00,30,00', 'FourthVAV-42', 19.762543, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.824036, 'FourthRHC-1-T', 22.992659, 'FourthVAV-47', 21.492462, 'FourthVAV-49', 23.006134, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.54248, 'FourthVAV-45', 20.670761000000002],
    ['2020-08-31 00,40,00', 'FourthVAV-42', 19.743322, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.852844, 'FourthRHC-1-T', 22.992659, 'FourthVAV-47', 21.473246, 'FourthVAV-49', 23.006134, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.513641, 'FourthVAV-45', 20.65154],
    ['2020-08-31 00,50,00', 'FourthVAV-42', 19.724101, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.824036, 'FourthRHC-1-T', 22.992659, 'FourthVAV-47', 21.45403, 'FourthVAV-49', 23.006134, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.484818, 'FourthVAV-45', 20.632319000000003],
    ['2020-08-31 01,00,00', 'FourthVAV-42', 19.70488, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.824036, 'FourthRHC-1-T', 22.992659, 'FourthVAV-47', 21.434814, 'FourthVAV-49', 23.006134, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.513641, 'FourthVAV-45', 20.613098],
    ['2020-08-31 01,10,00', 'FourthVAV-42', 19.700073333333332, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.824036, 'FourthRHC-1-T', 22.992659, 'FourthVAV-47', 21.434814, 'FourthVAV-49', 23.0013275, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.484818, 'FourthVAV-45', 20.6082915],
    ['2020-08-31 01,20,00', 'FourthVAV-42', 19.69526666666667, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.824036, 'FourthRHC-1-T', 22.992659, 'FourthVAV-47', 21.434814, 'FourthVAV-49', 22.996521, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.513641, 'FourthVAV-45', 20.603485],
    ['2020-08-31 01,30,00', 'FourthVAV-42', 19.69046, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.795197, 'FourthRHC-1-T', 22.992659, 'FourthVAV-47', 21.434814, 'FourthVAV-49', 22.9917145, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.484818, 'FourthVAV-45', 20.598678500000002],
    ['2020-08-31 01,40,00', 'FourthVAV-42', 19.671239, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.795197, 'FourthRHC-1-T', 22.992659, 'FourthVAV-47', 21.415588, 'FourthVAV-49', 22.986908, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.455978, 'FourthVAV-45', 20.593872],
    ['2020-08-31 01,50,00', 'FourthVAV-42', 19.652018, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.766357, 'FourthRHC-1-T', 22.992659, 'FourthVAV-47', 21.396362, 'FourthVAV-49', 22.982101500000002, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.427155, 'FourthVAV-45', 20.5890655],
    ['2020-08-31 02,00,00', 'FourthVAV-42', 19.632797, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.766357, 'FourthRHC-1-T', 22.992659, 'FourthVAV-47', 21.377136, 'FourthVAV-49', 22.977295, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.427155, 'FourthVAV-45', 20.584259],
    ['2020-08-31 02,10,00', 'FourthVAV-42', 19.632797, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.766357, 'FourthRHC-1-T', 22.992659, 'FourthVAV-47', 21.377136, 'FourthVAV-49', 22.972493500000002, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.427155, 'FourthVAV-45', 20.57464583333333],
    ['2020-08-31 02,20,00', 'FourthVAV-42', 19.632797, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.766357, 'FourthRHC-1-T', 22.992659, 'FourthVAV-47', 21.377136, 'FourthVAV-49', 22.967692, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.398315, 'FourthVAV-45', 20.565032666666667],
    ['2020-08-31 02,30,00', 'FourthVAV-42', 19.632797, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.766357, 'FourthRHC-1-T', 22.992659, 'FourthVAV-47', 21.377136, 'FourthVAV-49', 22.9628905, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.398315, 'FourthVAV-45', 20.5554195],
    ['2020-08-31 02,40,00', 'FourthVAV-42', 19.623184, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.766357, 'FourthRHC-1-T', 22.942847333333333, 'FourthVAV-47', 21.357920333333333, 'FourthVAV-49', 22.958089, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.427155, 'FourthVAV-45', 20.54580633333333],
    ['2020-08-31 02,50,00', 'FourthVAV-42', 19.613571, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.737518, 'FourthRHC-1-T', 22.893035666666666, 'FourthVAV-47', 21.33870466666667, 'FourthVAV-49', 22.9532875, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.398315, 'FourthVAV-45', 20.536193166666667],
    ['2020-08-31 03,00,00', 'FourthVAV-42', 19.603958, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.70871, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.319489, 'FourthVAV-49', 22.948486, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.398315, 'FourthVAV-45', 20.52658],
    ['2020-08-31 03,10,00', 'FourthVAV-42', 19.59435, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.70871, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.319489, 'FourthVAV-49', 22.948486, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.369492, 'FourthVAV-45', 20.521778666666666],
    ['2020-08-31 03,20,00', 'FourthVAV-42', 19.584742, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.70871, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.319489, 'FourthVAV-49', 22.948486, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.369492, 'FourthVAV-45', 20.516977333333333],
    ['2020-08-31 03,30,00', 'FourthVAV-42', 19.575134, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.70871, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.319489, 'FourthVAV-49', 22.948486, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.369492, 'FourthVAV-45', 20.512176],
    ['2020-08-31 03,40,00', 'FourthVAV-42', 19.565521, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.67987, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.30026266666667, 'FourthVAV-49', 22.948486, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.311813, 'FourthVAV-45', 20.507374666666667],
    ['2020-08-31 03,50,00', 'FourthVAV-42', 19.555908, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.67987, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.281036333333333, 'FourthVAV-49', 22.948486, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.311813, 'FourthVAV-45', 20.502573333333334],
    ['2020-08-31 04,00,00', 'FourthVAV-42', 19.546295, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.651031, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.26181, 'FourthVAV-49', 22.948486, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.311813, 'FourthVAV-45', 20.497772],
    ['2020-08-31 04,10,00', 'FourthVAV-42', 19.536687, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.67987, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.252207333333335, 'FourthVAV-49', 22.9436795, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.311813, 'FourthVAV-45', 20.526601],
    ['2020-08-31 04,20,00', 'FourthVAV-42', 19.527079, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.67987, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.242604666666665, 'FourthVAV-49', 22.938873, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.311813, 'FourthVAV-45', 20.55543],
    ['2020-08-31 04,30,00', 'FourthVAV-42', 19.517471, 'FourthRHC-3-T', 22.75248, 'FourthVAV-44', 21.67987, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.233002, 'FourthVAV-49', 22.9340665, 'FourthRHC-2-T', 23.108225, 'FourthVAV-43', 17.311813, 'FourthVAV-45', 20.584259000000003],
    ['2020-08-31 04,40,00', 'FourthVAV-42', 19.618382666666665, 'FourthRHC-3-T', 22.702881666666666, 'FourthVAV-44', 21.766357, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.261831, 'FourthVAV-49', 22.92926, 'FourthRHC-2-T', 23.058611666666668, 'FourthVAV-43', 17.54248, 'FourthVAV-45', 20.613088],
    ['2020-08-31 04,50,00', 'FourthVAV-42', 19.719294333333334, 'FourthRHC-3-T', 22.65328333333333, 'FourthVAV-44', 21.824036, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.29066, 'FourthVAV-49', 22.924453500000002, 'FourthRHC-2-T', 23.008998333333334, 'FourthVAV-43', 17.744293, 'FourthVAV-45', 20.641917],
    ['2020-08-31 05,00,00', 'FourthVAV-42', 19.820206, 'FourthRHC-3-T', 22.603685, 'FourthVAV-44', 21.881683, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.319489, 'FourthVAV-49', 22.919647, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 17.96054, 'FourthVAV-45', 20.670746],
    ['2020-08-31 05,10,00', 'FourthVAV-42', 19.877869, 'FourthRHC-3-T', 22.603685, 'FourthVAV-44', 21.99701, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.357930666666668, 'FourthVAV-49', 22.929255, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 18.162354, 'FourthVAV-45', 20.718801],
    ['2020-08-31 05,20,00', 'FourthVAV-42', 19.935532, 'FourthRHC-3-T', 22.603685, 'FourthVAV-44', 22.054688, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.396372333333332, 'FourthVAV-49', 22.938863, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 18.364197, 'FourthVAV-45', 20.766856],
    ['2020-08-31 05,30,00', 'FourthVAV-42', 19.993195, 'FourthRHC-3-T', 22.603685, 'FourthVAV-44', 22.112366, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.434814, 'FourthVAV-49', 22.948471, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 18.522766, 'FourthVAV-45', 20.814911000000002],
    ['2020-08-31 05,40,00', 'FourthVAV-42', 20.04125, 'FourthRHC-3-T', 22.603685, 'FourthVAV-44', 22.141205, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.473256, 'FourthVAV-49', 22.958079, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 18.666916, 'FourthVAV-45', 20.862966],
    ['2020-08-31 05,50,00', 'FourthVAV-42', 20.089305, 'FourthRHC-3-T', 22.603685, 'FourthVAV-44', 22.198883, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.511698, 'FourthVAV-49', 22.967687, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 18.81108, 'FourthVAV-45', 20.911020999999998],
    ['2020-08-31 06,00,00', 'FourthVAV-42', 20.13736, 'FourthRHC-3-T', 22.603685, 'FourthVAV-44', 22.227692, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.55014, 'FourthVAV-49', 22.977295, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 18.926422, 'FourthVAV-45', 20.959076],
    ['2020-08-31 06,10,00', 'FourthVAV-42', 20.185415, 'FourthRHC-3-T', 22.603685, 'FourthVAV-44', 22.25653, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.574157333333332, 'FourthVAV-49', 22.982101500000002, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 19.056152, 'FourthVAV-45', 20.980702833333332],
    ['2020-08-31 06,20,00', 'FourthVAV-42', 20.23347, 'FourthRHC-3-T', 22.603685, 'FourthVAV-44', 22.270935, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.598174666666665, 'FourthVAV-49', 22.986908, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 19.113815, 'FourthVAV-45', 21.002329666666668],
    ['2020-08-31 06,30,00', 'FourthVAV-42', 20.281525, 'FourthRHC-3-T', 22.603685, 'FourthVAV-44', 22.299774, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.622192, 'FourthVAV-49', 22.9917145, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 19.200317, 'FourthVAV-45', 21.0239565],
    ['2020-08-31 06,40,00', 'FourthVAV-42', 20.315165333333333, 'FourthRHC-3-T', 22.603685, 'FourthVAV-44', 22.299774, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.651031333333332, 'FourthVAV-49', 22.996521, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 19.315643, 'FourthVAV-45', 21.045583333333333],
    ['2020-08-31 06,50,00', 'FourthVAV-42', 20.348805666666667, 'FourthRHC-3-T', 22.603685, 'FourthVAV-44', 22.357422, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.679870666666666, 'FourthVAV-49', 23.0013275, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 19.373306, 'FourthVAV-45', 21.06721016666667],
    ['2020-08-31 07,00,00', 'FourthVAV-42', 20.382446, 'FourthRHC-3-T', 22.603685, 'FourthVAV-44', 22.357422, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.70871, 'FourthVAV-49', 23.006134, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 19.459808, 'FourthVAV-45', 21.088837],
    ['2020-08-31 07,10,00', 'FourthVAV-42', 20.411275, 'FourthRHC-3-T', 22.653205, 'FourthVAV-44', 22.386261, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.727925666666668, 'FourthVAV-49', 23.015742, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 19.488632, 'FourthVAV-45', 21.103251333333333],
    ['2020-08-31 07,20,00', 'FourthVAV-42', 20.440104, 'FourthRHC-3-T', 22.702724999999997, 'FourthVAV-44', 22.386261, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.74714133333333, 'FourthVAV-49', 23.02535, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 19.575134, 'FourthVAV-45', 21.117665666666667],
    ['2020-08-31 07,30,00', 'FourthVAV-42', 20.468933, 'FourthRHC-3-T', 22.752245, 'FourthVAV-44', 22.4151, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.766357, 'FourthVAV-49', 23.034958, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 19.632797, 'FourthVAV-45', 21.132080000000002],
    ['2020-08-31 07,40,00', 'FourthVAV-42', 20.497762, 'FourthRHC-3-T', 22.752245, 'FourthVAV-44', 22.44394, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.78558333333333, 'FourthVAV-49', 23.044566, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 19.661621, 'FourthVAV-45', 21.146494333333333],
    ['2020-08-31 07,50,00', 'FourthVAV-42', 20.526591, 'FourthRHC-3-T', 22.752245, 'FourthVAV-44', 22.44394, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.804809666666667, 'FourthVAV-49', 23.054174, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 19.70488, 'FourthVAV-45', 21.160908666666664],
    ['2020-08-31 08,00,00', 'FourthVAV-42', 20.55542, 'FourthRHC-3-T', 22.752245, 'FourthVAV-44', 22.44394, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.824036, 'FourthVAV-49', 23.063782, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 19.733704, 'FourthVAV-45', 21.175323],
    ['2020-08-31 08,10,00', 'FourthVAV-42', 20.584259, 'FourthRHC-3-T', 22.752245, 'FourthVAV-44', 22.472748, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.843251666666667, 'FourthVAV-49', 23.0685935, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 19.791367, 'FourthVAV-45', 21.1897375],
    ['2020-08-31 08,20,00', 'FourthVAV-42', 20.613098, 'FourthRHC-3-T', 22.752245, 'FourthVAV-44', 22.44394, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.86246733333333, 'FourthVAV-49', 23.073405, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 19.820206, 'FourthVAV-45', 21.204152],
    ['2020-08-31 08,30,00', 'FourthVAV-42', 20.641937, 'FourthRHC-3-T', 22.752245, 'FourthVAV-44', 22.501587, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.881683, 'FourthVAV-49', 23.0782165, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 19.849045, 'FourthVAV-45', 21.2185665],
    ['2020-08-31 08,40,00', 'FourthVAV-42', 20.661153, 'FourthRHC-3-T', 22.752245, 'FourthVAV-44', 22.501587, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.891296, 'FourthVAV-49', 23.083028, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 19.877884, 'FourthVAV-45', 21.232981],
    ['2020-08-31 08,50,00', 'FourthVAV-42', 20.680369, 'FourthRHC-3-T', 22.752245, 'FourthVAV-44', 22.530426, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.900909, 'FourthVAV-49', 23.0878395, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 19.935532, 'FourthVAV-45', 21.2473955],
    ['2020-08-31 09,00,00', 'FourthVAV-42', 20.699585, 'FourthRHC-3-T', 22.752245, 'FourthVAV-44', 22.559265, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.910522, 'FourthVAV-49', 23.092651, 'FourthRHC-2-T', 22.959385, 'FourthVAV-43', 19.935532, 'FourthVAV-45', 21.26181],
    ['2020-08-31 09,10,00', 'FourthVAV-42', 20.699585, 'FourthRHC-3-T', 22.752245, 'FourthVAV-44', 22.559265, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.929738, 'FourthVAV-49', 23.0974575, 'FourthRHC-2-T', 23.009051, 'FourthVAV-43', 19.96437, 'FourthVAV-45', 21.23298116666667],
    ['2020-08-31 09,20,00', 'FourthVAV-42', 20.699585, 'FourthRHC-3-T', 22.752245, 'FourthVAV-44', 22.559265, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.948954, 'FourthVAV-49', 23.102264, 'FourthRHC-2-T', 23.058717, 'FourthVAV-43', 20.022034, 'FourthVAV-45', 21.204152333333333],
    ['2020-08-31 09,30,00', 'FourthVAV-42', 20.699585, 'FourthRHC-3-T', 22.752245, 'FourthVAV-44', 22.559265, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.96817, 'FourthVAV-49', 23.1070705, 'FourthRHC-2-T', 23.108383, 'FourthVAV-43', 19.993195, 'FourthVAV-45', 21.1753235],
    ['2020-08-31 09,40,00', 'FourthVAV-42', 20.613087999999998, 'FourthRHC-3-T', 22.80239333333333, 'FourthVAV-44', 22.501587, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.939341, 'FourthVAV-49', 23.111877, 'FourthRHC-2-T', 23.108383, 'FourthVAV-43', 19.820206, 'FourthVAV-45', 21.14649466666667],
    ['2020-08-31 09,50,00', 'FourthVAV-42', 20.526591, 'FourthRHC-3-T', 22.852541666666667, 'FourthVAV-44', 22.4151, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.910512, 'FourthVAV-49', 23.1166835, 'FourthRHC-2-T', 23.108383, 'FourthVAV-43', 19.632797, 'FourthVAV-45', 21.117665833333334],
    ['2020-08-31 10,00,00', 'FourthVAV-42', 20.440094, 'FourthRHC-3-T', 22.90269, 'FourthVAV-44', 22.328613, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.881683, 'FourthVAV-49', 23.12149, 'FourthRHC-2-T', 23.108383, 'FourthVAV-43', 19.402145, 'FourthVAV-45', 21.088837],
    ['2020-08-31 10,10,00', 'FourthVAV-42', 20.36801133333333, 'FourthRHC-3-T', 22.90269, 'FourthVAV-44', 22.25653, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.833628, 'FourthVAV-49', 23.12629666666667, 'FourthRHC-2-T', 23.108383, 'FourthVAV-43', 19.171478, 'FourthVAV-45', 21.033574666666667],
    ['2020-08-31 10,20,00', 'FourthVAV-42', 20.29592866666667, 'FourthRHC-3-T', 22.90269, 'FourthVAV-44', 22.170044, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.785573, 'FourthVAV-49', 23.131103333333336, 'FourthRHC-2-T', 23.108383, 'FourthVAV-43', 18.955246, 'FourthVAV-45', 20.978312333333335],
    ['2020-08-31 10,30,00', 'FourthVAV-42', 20.223846, 'FourthRHC-3-T', 22.90269, 'FourthVAV-44', 22.112366, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.737518, 'FourthVAV-49', 23.13591, 'FourthRHC-2-T', 23.108383, 'FourthVAV-43', 18.81108, 'FourthVAV-45', 20.92305],
    ['2020-08-31 10,40,00', 'FourthVAV-42', 20.185404000000002, 'FourthRHC-3-T', 22.90269, 'FourthVAV-44', 22.083557, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.718302, 'FourthVAV-49', 23.140716666666666, 'FourthRHC-2-T', 23.108383, 'FourthVAV-43', 18.666916, 'FourthVAV-45', 20.867787666666665],
    ['2020-08-31 10,50,00', 'FourthVAV-42', 20.146962, 'FourthRHC-3-T', 22.90269, 'FourthVAV-44', 22.054688, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.699086, 'FourthVAV-49', 23.145523333333333, 'FourthRHC-2-T', 23.108383, 'FourthVAV-43', 18.55159, 'FourthVAV-45', 20.812525333333333],
    ['2020-08-31 11,00,00', 'FourthVAV-42', 20.10852, 'FourthRHC-3-T', 22.90269, 'FourthVAV-44', 21.99701, 'FourthRHC-1-T', 22.843224, 'FourthVAV-47', 21.67987, 'FourthVAV-49', 23.15033, 'FourthRHC-2-T', 23.108383, 'FourthVAV-43', 18.465103, 'FourthVAV-45', 20.757263],
    ['2020-08-31 11,10,00', 'FourthVAV-42', 20.050857333333333, 'FourthRHC-3-T', 22.852145666666665, 'FourthVAV-44', 21.96817, 'FourthRHC-1-T', 22.792019333333332, 'FourthVAV-47', 21.646240000000002, 'FourthVAV-49', 23.145523333333333, 'FourthRHC-2-T', 23.057727, 'FourthVAV-43', 18.364197, 'FourthVAV-45', 20.738042],
    ['2020-08-31 11,20,00', 'FourthVAV-42', 19.993194666666664, 'FourthRHC-3-T', 22.801601333333334, 'FourthVAV-44', 21.96817, 'FourthRHC-1-T', 22.740814666666665, 'FourthVAV-47', 21.61261, 'FourthVAV-49', 23.140716666666666, 'FourthRHC-2-T', 23.007071, 'FourthVAV-43', 18.306519, 'FourthVAV-45', 20.718821],
    ['2020-08-31 11,30,00', 'FourthVAV-42', 19.935532, 'FourthRHC-3-T', 22.751057, 'FourthVAV-44', 21.910522, 'FourthRHC-1-T', 22.68961, 'FourthVAV-47', 21.57898, 'FourthVAV-49', 23.135910000000003, 'FourthRHC-2-T', 22.956415, 'FourthVAV-43', 18.220016, 'FourthVAV-45', 20.6996],
    ['2020-08-31 11,40,00', 'FourthVAV-42', 19.906703, 'FourthRHC-3-T', 22.751057, 'FourthVAV-44', 21.910522, 'FourthRHC-1-T', 22.639556, 'FourthVAV-47', 21.550140666666667, 'FourthVAV-49', 23.131103333333336, 'FourthRHC-2-T', 22.956415, 'FourthVAV-43', 18.162354, 'FourthVAV-45', 20.680379],
    ['2020-08-31 11,50,00', 'FourthVAV-42', 19.877874, 'FourthRHC-3-T', 22.751057, 'FourthVAV-44', 21.881683, 'FourthRHC-1-T', 22.589502, 'FourthVAV-47', 21.521301333333334, 'FourthVAV-49', 23.12629666666667, 'FourthRHC-2-T', 22.956415, 'FourthVAV-43', 18.13353, 'FourthVAV-45', 20.661158],
    ['2020-08-31 12,00,00', 'FourthVAV-42', 19.849045, 'FourthRHC-3-T', 22.751057, 'FourthVAV-44', 21.881683, 'FourthRHC-1-T', 22.539448, 'FourthVAV-47', 21.492462, 'FourthVAV-49', 23.12149, 'FourthRHC-2-T', 22.956415, 'FourthVAV-43', 18.047028, 'FourthVAV-45', 20.641937],
    ['2020-08-31 12,10,00', 'FourthVAV-42', 19.829819, 'FourthRHC-3-T', 22.70154133333333, 'FourthVAV-44', 21.881683, 'FourthRHC-1-T', 22.48948366666667, 'FourthVAV-47', 21.45402, 'FourthVAV-49', 23.12149, 'FourthRHC-2-T', 22.956415, 'FourthVAV-43', 18.047028, 'FourthVAV-45', 20.641937],
    ['2020-08-31 12,20,00', 'FourthVAV-42', 19.810593, 'FourthRHC-3-T', 22.652025666666667, 'FourthVAV-44', 21.852844, 'FourthRHC-1-T', 22.439519333333333, 'FourthVAV-47', 21.415578, 'FourthVAV-49', 23.12149, 'FourthRHC-2-T', 22.956415, 'FourthVAV-43', 18.018204, 'FourthVAV-45', 20.641937],
    ['2020-08-31 12,30,00', 'FourthVAV-42', 19.791367, 'FourthRHC-3-T', 22.60251, 'FourthVAV-44', 21.852844, 'FourthRHC-1-T', 22.389555, 'FourthVAV-47', 21.377136, 'FourthVAV-49', 23.12149, 'FourthRHC-2-T', 22.956415, 'FourthVAV-43', 17.989365, 'FourthVAV-45', 20.641937],
    ['2020-08-31 12,40,00', 'FourthVAV-42', 19.757731333333336, 'FourthRHC-3-T', 22.60251, 'FourthVAV-44', 21.824036, 'FourthRHC-1-T', 22.389555, 'FourthVAV-47', 21.357920333333333, 'FourthVAV-49', 23.12149, 'FourthRHC-2-T', 22.906857, 'FourthVAV-43', 17.902878, 'FourthVAV-45', 20.641937],
    ['2020-08-31 12,50,00', 'FourthVAV-42', 19.724095666666667, 'FourthRHC-3-T', 22.60251, 'FourthVAV-44', 21.795197, 'FourthRHC-1-T', 22.389555, 'FourthVAV-47', 21.33870466666667, 'FourthVAV-49', 23.12149, 'FourthRHC-2-T', 22.857299, 'FourthVAV-43', 17.874054, 'FourthVAV-45', 20.641937],
    ['2020-08-31 13,00,00', 'FourthVAV-42', 19.69046, 'FourthRHC-3-T', 22.60251, 'FourthVAV-44', 21.824036, 'FourthRHC-1-T', 22.389555, 'FourthVAV-47', 21.319489, 'FourthVAV-49', 23.12149, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.816376, 'FourthVAV-45', 20.641937],
    ['2020-08-31 13,10,00', 'FourthVAV-42', 19.69526666666667, 'FourthRHC-3-T', 22.552425, 'FourthVAV-44', 21.824036, 'FourthRHC-1-T', 22.339965333333335, 'FourthVAV-47', 21.319489, 'FourthVAV-49', 23.111872, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.758713, 'FourthVAV-45', 20.651545],
    ['2020-08-31 13,20,00', 'FourthVAV-42', 19.700073333333332, 'FourthRHC-3-T', 22.50234, 'FourthVAV-44', 21.824036, 'FourthRHC-1-T', 22.290375666666666, 'FourthVAV-47', 21.319489, 'FourthVAV-49', 23.102254000000002, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.758713, 'FourthVAV-45', 20.661153],
    ['2020-08-31 13,30,00', 'FourthVAV-42', 19.70488, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.852844, 'FourthRHC-1-T', 22.240786, 'FourthVAV-47', 21.319489, 'FourthVAV-49', 23.092636, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.71547, 'FourthVAV-45', 20.670761],
    ['2020-08-31 13,40,00', 'FourthVAV-42', 19.700073333333332, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.881683, 'FourthRHC-1-T', 22.240786, 'FourthVAV-47', 21.319489, 'FourthVAV-49', 23.083018, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.657806, 'FourthVAV-45', 20.680369],
    ['2020-08-31 13,50,00', 'FourthVAV-42', 19.69526666666667, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.852844, 'FourthRHC-1-T', 22.240786, 'FourthVAV-47', 21.319489, 'FourthVAV-49', 23.0734, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.657806, 'FourthVAV-45', 20.689977],
    ['2020-08-31 14,00,00', 'FourthVAV-42', 19.69046, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.881683, 'FourthRHC-1-T', 22.240786, 'FourthVAV-47', 21.319489, 'FourthVAV-49', 23.063782, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.657806, 'FourthVAV-45', 20.699585],
    ['2020-08-31 14,10,00', 'FourthVAV-42', 19.69046, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.881683, 'FourthRHC-1-T', 22.240786, 'FourthVAV-47', 21.309876, 'FourthVAV-49', 23.0589805, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.657806, 'FourthVAV-45', 20.7139995],
    ['2020-08-31 14,20,00', 'FourthVAV-42', 19.69046, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.881683, 'FourthRHC-1-T', 22.240786, 'FourthVAV-47', 21.300263, 'FourthVAV-49', 23.054179, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.657806, 'FourthVAV-45', 20.728414],
    ['2020-08-31 14,30,00', 'FourthVAV-42', 19.69046, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.881683, 'FourthRHC-1-T', 22.240786, 'FourthVAV-47', 21.29065, 'FourthVAV-49', 23.0493775, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.628967, 'FourthVAV-45', 20.7428285],
    ['2020-08-31 14,40,00', 'FourthVAV-42', 19.69046, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.910522, 'FourthRHC-1-T', 22.291206666666668, 'FourthVAV-47', 21.281036666666665, 'FourthVAV-49', 23.044576, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.628967, 'FourthVAV-45', 20.757243],
    ['2020-08-31 14,50,00', 'FourthVAV-42', 19.69046, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.910522, 'FourthRHC-1-T', 22.34162733333333, 'FourthVAV-47', 21.271423333333335, 'FourthVAV-49', 23.0397745, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.628967, 'FourthVAV-45', 20.7716575],
    ['2020-08-31 15,00,00', 'FourthVAV-42', 19.69046, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.910522, 'FourthRHC-1-T', 22.392048, 'FourthVAV-47', 21.26181, 'FourthVAV-49', 23.034973, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.628967, 'FourthVAV-45', 20.786072],
    ['2020-08-31 15,10,00', 'FourthVAV-42', 19.69046, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.939362, 'FourthRHC-1-T', 22.442199, 'FourthVAV-47', 21.26181, 'FourthVAV-49', 23.0301665, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.657806, 'FourthVAV-45', 20.7812705],
    ['2020-08-31 15,20,00', 'FourthVAV-42', 19.69046, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.939362, 'FourthRHC-1-T', 22.492350000000002, 'FourthVAV-47', 21.26181, 'FourthVAV-49', 23.02536, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.600143, 'FourthVAV-45', 20.776469],
    ['2020-08-31 15,30,00', 'FourthVAV-42', 19.69046, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.881683, 'FourthRHC-1-T', 22.542501, 'FourthVAV-47', 21.26181, 'FourthVAV-49', 23.020553500000002, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.600143, 'FourthVAV-45', 20.7716675],
    ['2020-08-31 15,40,00', 'FourthVAV-42', 19.680847, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.881683, 'FourthRHC-1-T', 22.542501, 'FourthVAV-47', 21.242594333333333, 'FourthVAV-49', 23.015747, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.600143, 'FourthVAV-45', 20.766866],
    ['2020-08-31 15,50,00', 'FourthVAV-42', 19.671234000000002, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.881683, 'FourthRHC-1-T', 22.542501, 'FourthVAV-47', 21.22337866666667, 'FourthVAV-49', 23.0109405, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.600143, 'FourthVAV-45', 20.762064499999997],
    ['2020-08-31 16,00,00', 'FourthVAV-42', 19.661621, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.881683, 'FourthRHC-1-T', 22.542501, 'FourthVAV-47', 21.204163, 'FourthVAV-49', 23.006134, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.571304, 'FourthVAV-45', 20.757263],
    ['2020-08-31 16,10,00', 'FourthVAV-42', 19.671234000000002, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.881683, 'FourthRHC-1-T', 22.542501, 'FourthVAV-47', 21.204163, 'FourthVAV-49', 23.0013275, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.600143, 'FourthVAV-45', 20.74765],
    ['2020-08-31 16,20,00', 'FourthVAV-42', 19.680847, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.852844, 'FourthRHC-1-T', 22.542501, 'FourthVAV-47', 21.204163, 'FourthVAV-49', 22.996521, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.600143, 'FourthVAV-45', 20.738037],
    ['2020-08-31 16,30,00', 'FourthVAV-42', 19.69046, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.852844, 'FourthRHC-1-T', 22.542501, 'FourthVAV-47', 21.204163, 'FourthVAV-49', 22.9917145, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.571304, 'FourthVAV-45', 20.728423999999997],
    ['2020-08-31 16,40,00', 'FourthVAV-42', 19.680847, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.824036, 'FourthRHC-1-T', 22.542501, 'FourthVAV-47', 21.204163, 'FourthVAV-49', 22.986908, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.571304, 'FourthVAV-45', 20.718811],
    ['2020-08-31 16,50,00', 'FourthVAV-42', 19.671234000000002, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.824036, 'FourthRHC-1-T', 22.542501, 'FourthVAV-47', 21.204163, 'FourthVAV-49', 22.982101500000002, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.571304, 'FourthVAV-45', 20.709198],
    ['2020-08-31 17,00,00', 'FourthVAV-42', 19.661621, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.824036, 'FourthRHC-1-T', 22.542501, 'FourthVAV-47', 21.204163, 'FourthVAV-49', 22.977295, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.600143, 'FourthVAV-45', 20.699585],
    ['2020-08-31 17,10,00', 'FourthVAV-42', 19.652013, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.824036, 'FourthRHC-1-T', 22.542501, 'FourthVAV-47', 21.204163, 'FourthVAV-49', 22.977295, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.600143, 'FourthVAV-45', 20.699585],
    ['2020-08-31 17,20,00', 'FourthVAV-42', 19.642405, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.824036, 'FourthRHC-1-T', 22.542501, 'FourthVAV-47', 21.204163, 'FourthVAV-49', 22.977295, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.571304, 'FourthVAV-45', 20.699585],
    ['2020-08-31 17,30,00', 'FourthVAV-42', 19.632797, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.795197, 'FourthRHC-1-T', 22.542501, 'FourthVAV-47', 21.204163, 'FourthVAV-49', 22.977295, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.54248, 'FourthVAV-45', 20.699585],
    ['2020-08-31 17,40,00', 'FourthVAV-42', 19.632797, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.824036, 'FourthRHC-1-T', 22.542501, 'FourthVAV-47', 21.204163, 'FourthVAV-49', 22.977295, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.571304, 'FourthVAV-45', 20.699585],
    ['2020-08-31 17,50,00', 'FourthVAV-42', 19.632797, 'FourthRHC-3-T', 22.452255, 'FourthVAV-44', 21.824036, 'FourthRHC-1-T', 22.542501, 'FourthVAV-47', 21.204163, 'FourthVAV-49', 22.977295, 'FourthRHC-2-T', 22.807741, 'FourthVAV-43', 17.54248, 'FourthVAV-45', 20.699585]]
 );
});

app.get('/api/v1/get-coord-map', function (req, res) {
    return res.send(
        {'FourthVAV-42': [1937, 537], 'FourthRHC-3-T': [230, 711], 'FourthVAV-44': [1378, 842], 'FourthRHC-1-T': [261, 972], 'FourthVAV-43': [1508, 720], 'FourthVAV-47': [600, 444], 'FourthVAV-49': [1667, 434], 'FourthRHC-2-T': [166, 905], 'FourthVAV-45': [1066, 850]}
 );
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(process.env.PORT || 8080);