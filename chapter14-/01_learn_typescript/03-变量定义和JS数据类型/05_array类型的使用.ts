const names1: string[] = ["abc", "cba", "cba"] // 推荐
const names2: Array<string> = ["abc", "cba", "nba"] // 不推荐类型注解这种方式，因为会与react jsx有冲突

names1.push("why")
names2.push("why")

// names1.push(123) // 会报错, 因为数组中存放的数据类型是固定string
// names2.push(123) // 会报错, 因为数组中存放的数据类型是固定string
export {}