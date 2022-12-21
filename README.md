# GetCombinations
Get all nCr combinations (unique sets of r numbers from n sequential numbers)

C(n,r) = n!/(r!(n−r)!)

ex: 7C5 => 21


                   getCombinations(7, 5);
                   totalSet => [0,1,2,3,4,5,6]

                      at firstIdx: 0...

                      [0,1,2,3,4]
                      || bumpAtChangeIdx
                      [0,1,2,3,5]
                // bumpLeft     \\ bumpAtChangeIdx
              [0,1,2,4,5]       [0,1,2,3,6]
          [0,1,3,4,5]           || bumpAtChangeIdx
     [0,2,3,4,5]                [0,1,2,4,6]
                        // bumpLeft      \\ bumpAtChangeIdx
                      [0,1,3,4,6]        [0,1,2,5,6]
                 [0,2,3,4,6]             || bumpAtChangeIdx
                                         [0,1,3,5,6]
                                // bumpLeft       \\ bumpAtChangeIdx
                              [0,2,3,5,6]         [0,1,4,5,6]
                                                  || bumpAtChangeIdx
                                                  [0,2,4,5,6]
                                                  || bumpAtChangeIdx
                                                  [0,3,4,5,6] <-- lastLimitSliceMatches, firstIdx++


    returns:
    [
      [0, 1, 2, 3, 4],
      [0, 1, 2, 3, 5],
      [0, 1, 2, 4, 5],
      [0, 1, 3, 4, 5],
      [0, 2, 3, 4, 5],
      [0, 1, 2, 3, 6],
      [0, 1, 2, 4, 6],
      [0, 1, 3, 4, 6],
      [0, 2, 3, 4, 6],
      [0, 1, 2, 5, 6],
      [0, 1, 3, 5, 6],
      [0, 2, 3, 5, 6],
      [0, 1, 4, 5, 6],
      [0, 2, 4, 5, 6],
      [0, 3, 4, 5, 6],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 6],
      [1, 2, 3, 5, 6],
      [1, 2, 4, 5, 6],
      [1, 3, 4, 5, 6],
      [2, 3, 4, 5, 6]
    ]
