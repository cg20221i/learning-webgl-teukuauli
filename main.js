function main() {
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");

  var vertices = [
      // Face-Left-Back 4       // Red      // Surface orientation
      0, -0.5, 0, 0, 0.4, 1, 0, 0, -1,   // Index:  0    
      -0.5, 0, 0, 0, 0.4, 1, 0, 0, -1,   // Index:  1
      0, 0.5, 0, 0, 0.4, 1, 0, 0, -1,   // Index:  2
      0.5, 0, 0, 0, 0.4, 1, 0, 0, -1,   // Index:  3
      //scasca
      0.5, 0, 1.4, 0, 0.4, 1, 0, 0, -1,   // Index:  4    
      0, 0.5, 1.4, 0, 0.4, 1, 0, 0, -1,   // Index:  5
      0.5, 1, 1.4, 0, 0.4, 1, 0, 0, -1,   // Index:  6
      1, 0.5, 1.4, 0, 0.4, 1, 0, 0, -1,   // Index:  7
      //scasca
      0, -0.5, 0, 0, 0.4, 1, 0, 0, -1,   // Index:  8    
      0.5, 0, 1.4, 0, 0.4, 1, 0, 0, -1,   // Index:  9
      -0.5, 0, 0, 0, 0.4, 1, 0, 0, -1,   // Index:  10
      0, 0.5, 1.4, 0, 0.4, 1, 0, 0, -1,   // Index:  11

      0, 0.5, 0, 0.9, 0.2, 0.1, 0, 0, -1,   // Index:  12    
      0.5, 1, 1.4, 0.9, 0.2, 0.1, 0, 0, -1,   // Index:  13
      0.5, 0, 0, 0.9, 0.2, 0.1, 0, 0, -1,   // Index:  14
      1, 0.5, 1.4, 0.9, 0.2, 0.1, 0, 0, -1,   // Index:  15

      0, -0.5, 0, 1, 1, 1, 0, 0, -1,   // Index:  16    
      0.5, 0, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  17
      0.5, 0, 0, 1, 0, 0, 0, 0, -1,   // Index:  18
      1, 0.5, 1.4, 1, 1, 1, 0, 0, -1,   // Index:  19

      -0.5, 0, 0, 1, 0, 0, 0, 0, -1,   // Index:  20    
      0, 0.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  21
      0, 0.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  22
      0.5, 1, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  23

      //right side 
      1, 0.5, 0, 0, 0.4, 1, 0, 0, -1,   // Index:  24   
      0.5, 1, 0, 0, 0.4, 1, 0, 0, -1,   // Index:  25
      1, 1.5, 0, 0, 0.4, 1, 0, 0, -1,   // Index:  26
      1.5, 1, 0, 0, 0.4, 1, 0, 0, -1,   // Index:  27
      //scasca
      0.5, 0, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  28   
      0, 0.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  29
      0.5, 1, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  30
      1, 0.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  31
      //scasca
      1, 0.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  32  
      0.5, 0, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  33
      0.5, 1, 0, 1, 0, 0, 0, 0, -1,   // Index:  34
      0, 0.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  35

      1, 1.5, 0, 0, 0.4, 1, 0, 0, -1,   // Index:  36  
      0.5, 1, 1.4, 0, 0.4, 1, 0, 0, -1,   // Index:  37
      1.5, 1, 0, 0, 0.4, 1, 0, 0, -1,   // Index:  38
      1, 0.5, 1.4, 0, 0.4, 1, 0, 0, -1,   // Index:  39

      1, 0.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  40   
      0.5, 0, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  41
      1.5, 1, 0, 1, 0, 0, 0, 0, -1,   // Index:  42
      1, 0.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  43

      0.5, 1, 0, 1, 0, 0, 0, 0, -1,   // Index:  44   
      0, 0.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  45
      1, 1.5, 0, 1, 0, 0, 0, 0, -1,   // Index:  46
      0.5, 1, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  47

      //T
      3, 2.5, 0, 1, 1, 1, 0, 0, -1,   // Index:  48  
      2.5, 3, 0, 1, 1, 1, 0, 0, -1,   // Index:  49
      3, 3.5, 0, 1, 1, 1, 0, 0, -1,   // Index:  50
      3.5, 3, 0, 1, 1, 1, 0, 0, -1,   // Index:  51

      3, 2.5, 1.4, 1, 1, 1, 0, 0, -1,   // Index:  52 
      2.5, 3, 1.4, 1, 1, 1, 0, 0, -1,   // Index:  53
      3, 3.5, 1.4, 1, 1, 1, 0, 0, -1,   // Index:  54
      3.5, 3, 1.4, 1, 1, 1, 0, 0, -1,   // Index:  55

      3, 2.5, 0, 1, 1, 1, 0, 0, -1,   // Index:  56
      3, 2.5, 1.4, 1, 1, 1, 0, 0, -1,   // Index:  57
      2.5, 3, 0, 1, 1, 1, 0, 0, -1,   // Index:  58
      2.5, 3, 1.4, 1, 1, 1, 0, 0, -1,   // Index:  59

      3, 3.5, 0, 1, 1, 1, 0, 0, -1,   // Index:  60
      3, 3.5, 1.4, 1, 1, 1, 0, 0, -1,   // Index:  61
      3.5, 3, 0, 1, 1, 1, 0, 0, -1,   // Index:  62
      3.5, 3, 1.4, 1, 1, 1, 0, 0, -1,   // Index:  63

      3, 2.5, 0, 1, 1, 1, 0, 0, -1,   // Index:  64
      3, 2.5, 1.4, 1, 1, 1, 0, 0, -1,   // Index:  65
      3.5, 3, 0, 1, 1, 1, 0, 0, -1,   // Index:  66
      3.5, 3, 1.4, 1, 1, 1, 0, 0, -1,   // Index:  67

      2.5, 3, 0, 1, 1, 1, 0, 0, -1,   // Index:  68
      2.5, 3, 1.4, 1, 1, 1, 0, 0, -1,   // Index:  69
      3, 3.5, 0, 1, 1, 1, 0, 0, -1,   // Index:  70
      3, 3.5, 1.4, 1, 1, 1, 0, 0, -1,   // Index:  71

      // for - top of T
      4, 3.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  72
      3.5, 4, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  73
      2, 2.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  74
      2.5, 2, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  75

      4, 3.5, 1, 1, 0, 0, 0, 0, -1,   // Index:  76
      3.5, 4, 1, 1, 0, 0, 0, 0, -1,   // Index:  77
      2, 2.5, 1, 1, 0, 0, 0, 0, -1,   // Index:  78
      2.5, 2, 1, 1, 0, 0, 0, 0, -1,   // Index:  79

      4, 3.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  80
      4, 3.5, 1, 1, 0, 0, 0, 0, -1,   // Index:  81
      3.5, 4, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  82
      3.5, 4, 1, 1, 0, 0, 0, 0, -1,   // Index:  83

      4, 3.5, 1, 1, 0, 0, 0, 0, -1,   // Index:  80
      4, 3.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  81
      3.5, 4, 1, 1, 0, 0, 0, 0, -1,   // Index:  82
      3.5, 4, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  83





      2, 2.5, 1.4, 1, 0, 0, 0, 0, -1,  // Index:  84
      2, 2.5, 1, 1, 0, 0, 0, 0, -1,   // Index:  85
      2.5, 2, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  86
      2.5, 2, 1, 1, 0, 0, 0, 0, -1,  // Index:  87

      2, 2.5, 1, 1, 0, 0, 0, 0, -1,  // Index:  84
      2, 2.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  85
      2.5, 2, 1, 1, 0, 0, 0, 0, -1,   // Index:  86
      2.5, 2, 1.4, 1, 0, 0, 0, 0, -1,  // Index:  87




      4, 3.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  88
      4, 3.5, 1, 1, 0, 0, 0, 0, -1,   // Index:  89
      2.5, 2, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  90
      2.5, 2, 1, 1, 0, 0, 0, 0, -1,  // Index:  91

      4, 3.5, 1, 1, 0, 0, 0, 0, -1,   // Index:  88
      4, 3.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  89
      2.5, 2, 1, 1, 0, 0, 0, 0, -1,   // Index:  90
      2.5, 2, 1.4, 1, 0, 0, 0, 0, -1,  // Index:  91



      2, 2.5, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  92
      2, 2.5, 1, 1, 0, 0, 0, 0, -1,  // Index:  93
      3.5, 4, 1.4, 1, 0, 0, 0, 0, -1,   // Index:  94
      3.5, 4, 1, 1, 0, 0, 0, 0, -1,  // Index:  95

      2, 2.5, 1, 1, 0, 0, 0, 0, -1,   // Index:  92
      2, 2.5, 1.4, 1, 0, 0, 0, 0, -1,  // Index:  93
      3.5, 4, 1, 1, 0, 0, 0, 0, -1,   // Index:  94
      3.5, 4, 1.4, 1, 0, 0, 0, 0, -1,  // Index:  95

      // 1
      0.5, 0, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  96 
      0, 0.5, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  97
      0.5, 1, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  98
      1, 0.5, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  99
      
      0.5, 0, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  100 
      0, 0.5, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  101
      0.5, 1, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  102
      1, 0.5, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  103

      0.5, 0, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  104
      0.5, 0, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  105
      0, 0.5, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  106
      0, 0.5, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  107

      0.5, 1, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  108
      0.5, 1, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  109
      1, 0.5, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  110
      1, 0.5, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  111

      0.5, 0, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  112
      0.5, 0, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  113
      1, 0.5, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  114
      1, 0.5, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  115

      0, 0.5, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  116
      0, 0.5, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  117
      0.5, 1, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  118
      0.5, 1, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  119

      //bottom of 1
      1.2, 0.7, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  120 
      0.7, 1.2, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  121
      -0.2, 0.3, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  122
      0.3, -0.2, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  123

      1.2, 0.7, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  124 
      0.7, 1.2, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  125
      -0.2, 0.3, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  126
      0.3, -0.2, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  127

      1.2, 0.7, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  128
      1.2, 0.7, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  129
      0.7, 1.2, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  130
      0.7, 1.2, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  131

      -0.2, 0.3, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  132
      -0.2, 0.3, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  133
      0.3, -0.2, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  134
      0.3, -0.2, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  135

      1.2, 0.7, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  136
      1.2, 0.7, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  137
      0.3, -0.2, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  138
      0.3, -0.2, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  139

      0.7, 1.2, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  140
      0.7, 1.2, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  141
      -0.2, 0.3, -2.4, 1, 0, 0, 0, 0, -1,   // Index:  142
      -0.2, 0.3, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  143
      //head of 1
      0.4, -0.2, -0.8, 1, 0, 0, 0, 0, -1,   // Index:  144
      -0.2, 0.4, -0.8, 1, 0, 0, 0, 0, -1,   // Index:  145
      0.5, 1, -0.8, 1, 0, 0, 0, 0, -1,   // Index:  146
      1, 0.5, -0.8, 1, 0, 0, 0, 0, -1,   // Index:  147

      0.5, 0, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  148 
      0, 0.5, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  149
      0.5, 1, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  150
      1, 0.5, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  151

      0.4, -0.2, -0.8, 1, 0, 0, 0, 0, -1,   // Index:  152
      0.5, 0, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  153
      -0.2, 0.4, -0.8, 1, 0, 0, 0, 0, -1,   // Index:  154
      0, 0.5, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  155

      0.4, -0.2, -0.8, 1, 0, 0, 0, 0, -1,   // Index:  156
      0.5, 0, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  157
      1, 0.5, -0.8, 1, 0, 0, 0, 0, -1,   // Index:  158
      1, 0.5, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  159

      -0.2, 0.4, -0.8, 1, 0, 0, 0, 0, -1,   // Index:  160
      0, 0.5, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  161
      0.5, 1, -0.8, 1, 0, 0, 0, 0, -1,   // Index:  162
      0.5, 1, -1.4, 1, 0, 0, 0, 0, -1,   // Index:  163
      //6
      3, 2.5, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  164  
      2.5, 3, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  165
      3, 3.5, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  166
      3.5, 3, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  167

      3, 2.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  168  
      2.5, 3, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  169
      3, 3.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  170
      3.5, 3, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  171

      3, 2.5, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  172  
      3, 2.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  173
      2.5, 3, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  174
      2.5, 3, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  175
      
      3, 2.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  172  
      3, 2.5, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  173
      2.5, 3, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  174
      2.5, 3, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  175



      3, 3.5, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  176 
      3, 3.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  177
      3.5, 3, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  178
      3.5, 3, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  179

      3, 3.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  176 
      3, 3.5, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  177
      3.5, 3, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  178
      3.5, 3, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  179



      3, 2.5, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  180
      3, 2.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  181
      3.5, 3, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  182
      3.5, 3, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  183

      3, 2.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  180
      3, 2.5, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  181
      3.5, 3, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  182
      3.5, 3, -2.7, 1, 0, 0, 0, 0, -1,   // Index:  183

      //top of 6
      3, 2.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  184  
      2.5, 3, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  185
      3.5, 4, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  186
      4, 3.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  187

      3, 2.5, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  188
      2.5, 3, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  189
      3.5, 4, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  190
      4, 3.5, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  191

      3, 2.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  192
      3, 2.5, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  193
      2.5, 3, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  194
      2.5, 3, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  195
      
      3, 2.5, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  192
      3, 2.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  193
      2.5, 3, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  194
      2.5, 3, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  195

      3.5, 4, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  196
      3.5, 4, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  197
      4, 3.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  198
      4, 3.5, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  199

      3.5, 4, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  196
      3.5, 4, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  197
      4, 3.5, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  198
      4, 3.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  199
      


      3, 2.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  200
      3, 2.5, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  201
      4, 3.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  202
      4, 3.5, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  203

      3, 2.5, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  200
      3, 2.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  201
      4, 3.5, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  202
      4, 3.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  203

      3, 2.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  204
      3, 2.5, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  205
      4, 3.5, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  206
      4, 3.5, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  207

      2.5, 3, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  208
      2.5, 3, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  209
      3.5, 4, -1.7, 1, 0, 0, 0, 0, -1,   // Index:  210
      3.5, 4, -1.2, 1, 0, 0, 0, 0, -1,   // Index:  211
      // bottom of 6
      3, 2.5, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  212  
      2.5, 3, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  213
      3.5, 4, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  214
      4, 3.5, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  215

      3, 2.5, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  216  
      2.5, 3, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  217
      3.5, 4, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  218
      4, 3.5, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  219

      3, 2.5, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  220  
      3, 2.5, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  221
      2.5, 3, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  222
      2.5, 3, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  223

      3, 2.5, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  220  
      3, 2.5, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  221
      2.5, 3, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  222
      2.5, 3, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  223

      3.5, 4, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  224 
      3.5, 4, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  225
      4, 3.5, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  226
      4, 3.5, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  227

      3, 2.5, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  228 
      3, 2.5, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  229
      4, 3.5, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  230
      4, 3.5, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  231

      2.5, 3, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  232
      2.5, 3, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  233
      3.5, 4, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  234
      3.5, 4, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  235

      2.5, 3, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  232
      2.5, 3, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  233
      3.5, 4, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  234
      3.5, 4, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  235

      3, 2.5, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  228 
      3, 2.5, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  229
      4, 3.5, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  230
      4, 3.5, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  231

      3, 2.5, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  228 
      3, 2.5, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  229
      4, 3.5, -2.3, 1, 0, 0, 0, 0, -1,   // Index:  230
      4, 3.5, -2.9, 1, 0, 0, 0, 0, -1,   // Index:  231
  ];

  var indices = [
      // A
      0, 1, 2, 0, 2, 3,
      4, 5, 6, 4, 6, 7,    
      8, 9, 10, 8, 10, 11,
      12, 13, 14, 12, 14, 15, 
      16, 17, 18, 16, 18, 19,  
      20, 21, 22, 20, 22, 23,  
      24, 25, 26, 24, 26, 27, 
      28, 29, 30, 28, 30, 31, 
      32, 33, 34, 32, 34, 35, 
      36, 37, 38, 36, 38, 39, 
      40, 41, 42, 40, 42, 43, 
      44, 45, 46, 44, 46, 47,
      // T 
      48, 49, 50, 48, 50, 51,
      52, 53, 54, 52, 54, 55, 
      56, 57, 58, 56, 58, 59,
      60, 61, 62, 60, 62, 63,
      64, 65, 66, 64, 66, 67,
      68, 69, 70, 68, 70, 71,
      //for - top of T
      72, 73, 74, 72, 74, 75,
      76, 77, 78, 76, 78, 79,
      80, 81, 82, 80, 82, 83,
      84, 85, 86, 84, 86, 87,
      88, 89, 90, 88, 90, 91,
      92, 93, 94, 92, 94, 95,
      //1
      96, 97, 98, 96, 98, 99,
      100, 101, 102, 100, 102, 103,
      104, 105, 106, 104, 106, 107,
      108, 109, 110, 108, 110, 111,
      112, 113, 114, 112, 114, 115,
      116, 117, 118, 116, 118, 119,
      //bottom no 1
      120, 121, 122, 120, 122, 123,
      124, 125, 126, 124, 126, 127,
      128, 129, 130, 128, 130, 131,
      132, 133, 134, 132, 134, 135,
      136, 137, 138, 136, 138, 139,
      140, 141, 142, 140, 142, 143,
      // head of 1
      144, 145, 146, 144, 146, 147,
      148, 149, 150, 148, 150, 151,
      152, 153, 154, 152, 154, 155,
      156, 157, 158, 156, 158, 159,
      160, 161, 162, 160, 162, 163,
      //6
      164, 165, 166, 164, 166, 167,
      168, 169, 170, 168, 170, 171,
      172, 173, 174, 172, 174, 175,
      176, 177, 178, 176, 178, 179,
      180, 181, 182, 180, 182, 183,
      184, 185, 186, 184, 186, 187,
      188, 189, 190, 188, 190, 191,
      192, 193, 194, 192, 194, 195,
      196, 197, 198, 196, 198, 199,
      200, 201, 202, 200, 202, 203,
      204, 205, 206, 204, 206, 207,
      208, 209, 210, 208, 210, 211,
      212, 213, 214, 212, 214, 215,
      216, 217, 218, 216, 218, 219,
      220, 221, 222, 220, 222, 223,
      224, 225, 226, 224, 226, 227,
      228, 229, 230, 228, 230, 231,
      232, 233, 234, 232, 234, 235,
      236, 237, 238, 236, 238, 239,


      240, 241, 242, 240, 242, 243,
      244, 245, 246, 244, 246, 247,
      248, 249, 250, 248, 250, 251,
      252, 253, 254, 252, 254, 255,
      256, 257, 258, 256, 258, 259,
      260, 261, 262, 260, 262, 263,
      264, 265, 266, 264, 266, 267,
      268, 269, 270, 268, 270, 271,
      272, 273, 274, 272, 274, 275,
      276, 277, 278, 276, 278, 279,
      280, 281, 282, 280, 282, 283,
      284, 285, 286, 284, 286, 287,
      288, 289, 290, 288, 290, 291,
  ];

  // Create a linked-list for storing the vertices data in the GPU realm
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  var indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

  // VERTEX SHADER
  var vertexShaderCode = `
      attribute vec3 aPosition;
      attribute vec3 aColor;
      attribute vec3 aNormal;
      uniform mat4 uModel;
      uniform mat4 uView;
      uniform mat4 uProjection;
      varying vec3 vPosition;
      varying vec3 vColor;
      varying vec3 vNormal;
      void main () {
          vec4 position = vec4(aPosition, 1.0);
          gl_Position = uProjection * uView * uModel * position;
          // gl_Position is the final destination for storing
          //  positional data for the rendered vertex
          vColor = aColor;
          vNormal = aNormal;
          vPosition = (uModel * position).xyz;
      }
  `;
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderCode);
  gl.compileShader(vertexShader);

  // FRAGMENT SHADER
  var fragmentShaderCode = `
      precision mediump float;
      varying vec3 vColor;
      uniform vec3 uLightConstant;      
      uniform float uAmbientIntensity; 
      varying vec3 vPosition;
      varying vec3 vNormal;
      uniform vec3 uLightPosition;
      uniform vec3 uViewerPosition;
      uniform mat3 uNormalModel;
      void main() {
          vec3 ambient = uLightConstant * uAmbientIntensity;
          vec3 lightDirection = uLightPosition - vPosition;
          vec3 normalizedLight = normalize(lightDirection);
          vec3 normalizedNormal = normalize(uNormalModel * vNormal);
          float cosTheta = dot(normalizedNormal, normalizedLight);
          vec3 diffuse = vec3(0.0, 0.0, 0.0);
          if (cosTheta > 0.0) {
              float diffuseIntensity = cosTheta;
              diffuse = uLightConstant * diffuseIntensity;
          }
          vec3 normalizedReflector = normalize(reflect(-lightDirection, normalizedNormal));
          vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
          float cosPhi = dot(normalizedReflector, normalizedViewer);
          vec3 specular = vec3(0., 0., 0.);
          if (cosPhi > 0.) {
              float shininessConstant = 100.0;    // bare minimum spec for metal
              float specularIntensity = pow(cosPhi, shininessConstant);
              specular = uLightConstant * specularIntensity;
          }
          vec3 phong = ambient + diffuse + specular;
          gl_FragColor = vec4(phong * vColor, 1.0);
          // gl_FragColor is the final destination for storing
          //  color data for the rendered fragment
      }
  `;
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderCode);
  gl.compileShader(fragmentShader);

  // Comparing to C-Programming, we may imagine
  //  that up to this step we have created two
  //  object files (.o), for the vertex and fragment shaders

  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  // Local variables
  var isAnimated = false;
  var theta = 0.0;
  var direction = "";
  var dX = 0.0;
  var dY = 0.0;
  // For the model (all linear transformation)
  var uModel = gl.getUniformLocation(shaderProgram, "uModel");

  // For the camera
  var camera = [2.0, 0.0, 7.5]; //7.5 unit from the origin outwards the screen
  var uView = gl.getUniformLocation(shaderProgram, "uView");
  var view = glMatrix.mat4.create();  // Create an identity matrix
  glMatrix.mat4.lookAt(
      view,
      camera,
      [camera[0], 5.0, -10.0],
      [-10.0, 10.0, 10.0]
  );
  gl.uniformMatrix4fv(uView, false, view);

  // For the projection
  var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
  var perspective = glMatrix.mat4.create();
  glMatrix.mat4.perspective(
      perspective,
      ((Math.PI / 2) - 15),  //75 degrees of camera 
      1.0,
      0.5,
      50.0
  );
  gl.uniformMatrix4fv(uProjection, false, perspective);

  // For the lighting and shading
  var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
  // Ambient
  var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
  gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]);   // white color
  gl.uniform1f(uAmbientIntensity, 0.4);             // 40% intensity
  // Diffuse
  var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
  gl.uniform3fv(uLightPosition, [1.0, 0.0, 1.0]);
  var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
  // Specular
  var uViewerPosition = gl.getUniformLocation(shaderProgram, "uViewerPosition");

  // Local functions
  // MOUSE
  var dragging, prevx, prevy, rotation = glMatrix.mat4.create();
  function onMouseDown(event) {
      var x = event.clientX;
      var y = event.clientY;
      var rect = event.target.getBoundingClientRect();
      if (
          rect.left <= x &&
          rect.right >= x &&
          rect.top <= y &&
          rect.bottom >= y
      ) {
          dragging = true;
          prevx = x;
          prevy = y;
      }
  }
  function onMouseUp(event) {
      dragging = false;
  }
  function onMouseMove(event) {
      if (dragging) {
          var x = event.clientX;
          var y = event.clientY;
          var xdiff = x - prevx;
          var ydiff = y - prevy;
          var inverseRotation = glMatrix.mat4.create();
          glMatrix.mat4.invert(inverseRotation, rotation);
          var xAxis = [1, 0, 0, 0];
          var yAxis = [0, 1, 0, 0];
          glMatrix.vec4.transformMat4(xAxis, xAxis, inverseRotation);
          glMatrix.vec4.transformMat4(yAxis, yAxis, inverseRotation);
          glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(xdiff), yAxis);
          glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(ydiff), xAxis);
          prevx = x;
          prevy = y;
      }
  }
  document.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mouseup", onMouseUp);
  document.addEventListener("mousemove", onMouseMove);

  // KEYBOARD or even for changing the camera location
  function onKeyDown(event) {
      switch (event.keyCode) {
          case 87: // Object UP
              direction = "up";
              break;
          case 83: // Object DOWN
              direction = "down";
              break;
          case 68: // Object RIGHT
              direction = "right";
              break;
          case 65: // Object LEFT
              direction = "left";
              break;
          case 38: // Camera UP
              camera[1] += 1;
              gl.uniform3fv(uViewerPosition, camera);
              glMatrix.mat4.lookAt(
                  view,
                  camera,
                  [camera[0], 0.0, -10.0],
                  [0.0, 1.0, 0.0]
              );
              gl.uniformMatrix4fv(uView, false, view);
              break;
          case 40: // Camera DOWN
              camera[1] -= 1;
              gl.uniform3fv(uViewerPosition, camera);
              glMatrix.mat4.lookAt(
                  view,
                  camera,
                  [camera[0], 0.0, -10.0],
                  [0.0, 1.0, 0.0]
              );
              gl.uniformMatrix4fv(uView, false, view);
              break;
          case 39: // Camera RIGHT
              camera[0] += 1;
              gl.uniform3fv(uViewerPosition, camera);
              glMatrix.mat4.lookAt(
                  view,
                  camera,
                  [camera[0], 0.0, -10.0],
                  [0.0, 1.0, 0.0]
              );
              gl.uniformMatrix4fv(uView, false, view);
              break;
          case 37: // Camera LEFT
              camera[0] -= 1;
              gl.uniform3fv(uViewerPosition, camera);
              glMatrix.mat4.lookAt(
                  view,
                  camera,
                  [camera[0], 0.0, -10.0],
                  [0.0, 1.0, 0.0]
              );
              gl.uniformMatrix4fv(uView, false, view);
              break;
          default:
              break;
      }
  }
  function onKeyUp(event) {
      direction = "";
  }
  function onKeyPress(event) {
      console.log('keypress');
      if (event.keyCode == 32) {  // Space button
          isAnimated = !isAnimated;
      }
  }
  document.addEventListener("keypress", onKeyPress)
  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp);

  // Teach the GPU how to collect
  //  the positional values from ARRAY_BUFFER
  //  for each vertex being processed
  var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(
      aPosition,
      3,
      gl.FLOAT,
      false,
      9 * Float32Array.BYTES_PER_ELEMENT,
      0);
  gl.enableVertexAttribArray(aPosition);
  var aColor = gl.getAttribLocation(shaderProgram, "aColor");
  gl.vertexAttribPointer(
      aColor,
      3,
      gl.FLOAT,
      false,
      9 * Float32Array.BYTES_PER_ELEMENT,
      3 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aColor);
  var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
  gl.vertexAttribPointer(
      aNormal,
      3,
      gl.FLOAT,
      false,
      9 * Float32Array.BYTES_PER_ELEMENT,
      6 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aNormal);

  function render() {
      gl.enable(gl.DEPTH_TEST);
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      var model = glMatrix.mat4.create();
      if (isAnimated) {
          theta += 0.01;
      }
      switch (direction) {
          case "up":
              dY += 0.1;
              break;
          case "down":
              dY -= 0.1;
              break;
          case "left":
              dX -= 0.1;
              break;
          case "right":
              dX += 0.1;
              break;

          default:
              break;
      }
      glMatrix.mat4.translate(model, model, [dX, dY, 0.0]);
      glMatrix.mat4.rotateZ(rotation, rotation, theta);
      glMatrix.mat4.rotateY(rotation, rotation, theta);
      glMatrix.mat4.multiply(model, model, rotation);
      gl.uniformMatrix4fv(uModel, false, model);

      // For transforming the normal vector
      var normalModel = glMatrix.mat3.create();
      glMatrix.mat3.normalFromMat4(normalModel, model);
      gl.uniformMatrix3fv(uNormalModel, false, normalModel);

      gl.drawElements(gl.TRIANGLES, indices.length,
          gl.UNSIGNED_SHORT, 0);
      requestAnimationFrame(render);

      function draw() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawBall();
          
          if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
              dx = -dx;
          }
          if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
              dy = -dy;
          }
          
          x += dx;
          y += dy;
      }
      
      setInterval(draw, 10);
  }
  requestAnimationFrame(render);
}