    // public static int minSum(List<Integer> data, int ktests) {
    //     if (data.size() == 0) {
    //         return 0;
    //     }   

    //     int index = 0;
    //     int max = Integer.MAX_VALUE;
    //     while (ktests > 0) {
    //         int currentValue = data.get(index);
    //         if (currentValue <= max) {
    //             data.sort(Comparator.reverseOrder());
    //             index = 0;
    //             max = data.get(0) / 2;
    //             continue;
    //         }
    //         ktests--;

    //         int roundUp = currentValue & 1;
    //         currentValue /= 2;
    //         currentValue += roundUp;

    //         data.set(index, currentValue);
    //         if (index + 1 < data.size()) {
    //             index++;
    //         }
    //     }
    //     return data.stream().mapToInt(a->a).sum();
    // }