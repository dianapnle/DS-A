class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const insertNode = (head, value, index) => {
    let current = head;
    let currentindex = 0;
    let insert = new Node(value);

    //edge case if insert at the head
    if (index === 0) {
      insert.next = head;
      return insert
    }

    //traverse to get to the index
    while(current !== null) {
      //stop right before the index you want to insert into
      if (currentindex === index - 1) {
        //save the variable after the current so it doesn't get lost
        let next = current.next;
        current.next = insert
        insert.next = next
      }
      //increase curr index count to keep track as it traverses
      currentindex += 1;
      current = current.next;
    }

    return head
  };

  //O(n) | space : O(1)


  const insertNodeRecursive = (head, value, index, count = 0) => {
        if (head === null) return null;


    //edge case if insert at the head
    if (index === 0) {
        insert.next = head;
        return insert
      }

        if (count === index - 1) {
            let next = head.next
            head.next = new Node(value);
            head.next.next = next
            return head;
        }

        insertNode(head.next, value, index, count + 1);
        return head
  }

  //O(n) for space and time
