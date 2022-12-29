//
//  ViewController.swift
//  call
//
//  Created by Van Y Le on 07/11/2022.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var endCall: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    @IBAction func endCall(_ sender: Any) {
        print("end")
    }

}

