document.addEventListener('DOMContentLoaded', domReady);

        function domReady() {
            new Dics({
                container: document.querySelectorAll('.b-dics')[0],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[1],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[2],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[3],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[4],
                hideTexts: false,
                textPosition: "bottom"

            });
        }

        function largeSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 3
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'assets/img/nvidia/';
                        break;
                    case 1:
                        image.src = 'assets/img/jhu/';
                        break;
                    case 2:
                        image.src = 'assets/img/Barn/';
                        break;
                    case 3:
                        image.src = 'assets/img/Caterpillar/';
                        break;
                    case 4:
                        image.src = 'assets/img/Courthouse/';
                        break;
                    case 5:
                        image.src = 'assets/img/Ignatius/';
                        break;
                    case 6:
                        image.src = 'assets/img/Meetingroom/';
                        break;
                    case 7:
                        image.src = 'assets/img/Truck/';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '/rgb.png';
                        break;
                    case 1:
                        image.src = image.src + '/mesh.png';
                        break;
                    case 2:
                        image.src = image.src + '/normal.png';
                        break;
                }
            }

            scene_list = document.getElementById("large-scale-recon-1").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
            scene_list = document.getElementById("large-scale-recon-2").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i+2) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function hssdEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        switch (i) {
                            case 0:
                                image.src = "resources/reconstruction/HSSD/fix_1cm.png"
                                image.alt = "Fix-size (1cm) [819 MB]"
                                break;
                            case 1:
                                image.src = "resources/reconstruction/HSSD/ours.png"
                                break;
                        }
                        break;
                    case 1:
                        switch (i) {
                            case 0:
                                image.src = "resources/reconstruction/HSSD/fix_4cm.png"
                                image.alt = "Fix-size (4cm) [37 MB]"
                                break;
                            case 1:
                                image.src = "resources/reconstruction/HSSD/ours.png"
                                break;
                        }
                        break;
                    case 2:
                        switch (i) {
                            case 0:
                                image.src = "resources/reconstruction/HSSD/fix_8cm.png"
                                image.alt = "Fix-size (8cm) [10 MB]"
                                break;
                            case 1:
                                image.src = "resources/reconstruction/HSSD/ours.png"
                                break;
                        }
                        break;
                    case 3:
                        switch (i) {
                            case 0:
                                image.src = "resources/reconstruction/HSSD/p.png"
                                image.alt = "Multi-TSDFs [270 MB]"
                                break;
                            case 1:
                                image.src = "resources/reconstruction/HSSD/ours.png"
                                break;
                        }
                        break;
                }
            }
        }

        function hssdMaskEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[1]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 3
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        switch (i) {
                            case 0:
                                image.src = "resources/reconstruction/HSSD/mask/fine_fix.jpg"
                                image.alt = "Fix-size (1cm)"
                                break;
                            case 1:
                                image.src = "resources/reconstruction/HSSD/mask/fine_p.jpg"
                                break;
                            case 2:
                                image.src = "resources/reconstruction/HSSD/mask/fine_ours.jpg"
                                break;
                        }
                        break;
                    case 1:
                        switch (i) {
                            case 0:
                                image.src = "resources/reconstruction/HSSD/mask/middle_fix.jpg"
                                image.alt = "Fix-size (4cm)"
                                break;
                            case 1:
                                image.src = "resources/reconstruction/HSSD/mask/middle_p.jpg"
                                break;
                            case 2:
                                image.src = "resources/reconstruction/HSSD/mask/middle_ours.jpg"
                                break;
                        }
                        break;
                    case 2:
                        switch (i) {
                            case 0:
                                image.src = "resources/reconstruction/HSSD/mask/coarse_fix.jpg"
                                image.alt = "Fix-size (8cm)"
                                break;
                            case 1:
                                image.src = "resources/reconstruction/HSSD/mask/coarse_p.jpg"
                                break;
                            case 2:
                                image.src = "resources/reconstruction/HSSD/mask/coarse_ours.jpg"
                                break;
                        }
                        break;dics

                }
            }
        }

        function scannetEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[2]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        switch (i) {
                            case 0:
                                image.src = "resources/reconstruction/ScanNet/fix_1cm.png"
                                image.alt = "Fix-size (1cm) [463 MB]"
                                break;
                            case 1:
                                image.src = "resources/reconstruction/ScanNet/ours.png"
                                break;
                        }
                        break;
                    case 1:
                        switch (i) {
                            case 0:
                                image.src = "resources/reconstruction/ScanNet/fix_4cm.png"
                                image.alt = "Fix-size (4cm) [25 MB]"
                                break;
                            case 1:
                                image.src = "resources/reconstruction/ScanNet/ours.png"
                                break;
                        }
                        break;
                    case 2:
                        switch (i) {
                            case 0:
                                image.src = "resources/reconstruction/ScanNet/fix_8cm.png"
                                image.alt = "Fix-size (8cm) [7 MB]"
                                break;
                            case 1:
                                image.src = "resources/reconstruction/ScanNet/ours.png"
                                break;
                        }
                        break;
                    case 3:
                        switch (i) {
                            case 0:
                                image.src = "resources/reconstruction/ScanNet/p.png"
                                image.alt = "Multi-TSDFs [75 MB]"
                                break;
                            case 1:
                                image.src = "resources/reconstruction/ScanNet/ours.png"
                                break;
                        }
                        break;
                }
            }
        }

        function scannetMaskEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[3]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 3
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        switch (i) {
                            case 0:
                                image.src = "resources/reconstruction/ScanNet/fix_1cm_small_mask.png"
                                image.alt = "Fix-size (1cm)"
                                break;
                            case 1:
                                image.src = "resources/reconstruction/ScanNet/p.png"
                                break;
                            case 2:
                                image.src = "resources/reconstruction/ScanNet/ours_geo_small_mask.png"
                                break;
                        }
                        break;
                    case 1:
                        switch (i) {
                            case 0:
                                image.src = "resources/reconstruction/ScanNet/fix_4cm_middle_mask.png"
                                image.alt = "Fix-size (4cm)"
                                break;
                            case 1:
                                image.src = "resources/reconstruction/ScanNet/p.png"
                                break;
                            case 2:
                                image.src = "resources/reconstruction/ScanNet/ours_middle_mask.png"
                                break;
                        }
                        break;
                    case 2:
                        switch (i) {
                            case 0:
                                image.src = "resources/reconstruction/ScanNet/fix_8cm_large_mask.png"
                                image.alt = "Fix-size (8cm)"
                                break;
                            case 1:
                                image.src = "resources/reconstruction/ScanNet/p.png"
                                break;
                            case 2:
                                image.src = "resources/reconstruction/ScanNet/ours_large_mask.png"
                                break;
                        }
                        break;dics

                }
            }
        }

        


        function ablation3DEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[1]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 4
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'resources/360_stmt_ablation/bicycle_0';
                        break;
                    case 1:
                        image.src = 'resources/360_stmt_ablation/bicycle_3';
                        break;
                    case 2:
                        image.src = 'resources/360_stmt_ablation/bicycle_5';
                        break;
                    case 3:
                        image.src = 'resources/360_stmt_ablation/garden_0';
                        break; 
                    case 4:
                        image.src = 'resources/360_stmt_ablation/garden_1';
                        break;
                    case 5:
                        image.src = 'resources/360_stmt_ablation/treehill_9';
                        break; 
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '_no3d.jpg';
                        break;
                    case 1:
                        image.src = image.src + '_ours.jpg';
                        break;
                    case 2:
                        image.src = image.src + '_upgt.jpg';
                        break;
                    case 3:
                        image.src = image.src + '_gt.jpg';
                        break;
                }
            }

            let scene_list = document.getElementById("ablation-3d-filter").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }