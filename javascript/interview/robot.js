

function profit(logs) {
    //two queue stacks for each robot type
    let res = [];
    let robot1 = [];
    let robot2 = [];


    for (let log of logs) {
        const [type, robot, num, price, upgradePrice] = log
        if (type === "supply") {
            //if its supply, push num amount of robots into queue
            if (robot === "robot1") {
                for (i = 0; i < num; i ++) {
                    robot1.push(price)
                }
            } else if (robot === "robot2") {
                for (i = 0; i < num; i ++) {
                    robot1.push(price)
                }
            }
            //if sell, check which robot and take from the front of the queue
        } else if (type === "sell") {
            if (robot === "robot1") {
                let add = robot1.shift();
                res.push(add)
            } else if (robot === "robot2") {
                let add = robot2.shift();
                res.push(add)
            }
            //if upgrade , check which robot and replace the last robot in the queue with new price
        } else if (type === "upgrade") {
            if (robot === "robot1") {
                robot1[robot1.length - 1] = upgradePrice
            } else if (robot === "robot2") {
                robot2[robot2.length - 1] = upgradePrice
            }
        }
    }
    return res
}
