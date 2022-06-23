(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports.readStockData=function () {

    var data = [];

    "Date,Close\r\n1/2/2020 16:00:00,86.05\r\n1/3/2020 16:00:00,88.6\r\n1/6/2020 16:00:00,90.31\r\n1/7/2020 16:00:00,93.81\r\n1/8/2020 16:00:00,98.43\r\n1/9/2020 16:00:00,96.27\r\n1/10/2020 16:00:00,95.63\r\n1/13/2020 16:00:00,104.97\r\n1/14/2020 16:00:00,107.58\r\n1/15/2020 16:00:00,103.7\r\n1/16/2020 16:00:00,102.7\r\n1/17/2020 16:00:00,102.1\r\n1/21/2020 16:00:00,109.44\r\n1/22/2020 16:00:00,113.91\r\n1/23/2020 16:00:00,114.44\r\n1/24/2020 16:00:00,112.96\r\n1/27/2020 16:00:00,111.6\r\n1/28/2020 16:00:00,113.38\r\n1/29/2020 16:00:00,116.2\r\n1/30/2020 16:00:00,128.16\r\n1/31/2020 16:00:00,130.11\r\n2/3/2020 16:00:00,156\r\n2/4/2020 16:00:00,177.41\r\n2/5/2020 16:00:00,146.94\r\n2/6/2020 16:00:00,149.79\r\n2/7/2020 16:00:00,149.61\r\n2/10/2020 16:00:00,154.26\r\n2/11/2020 16:00:00,154.88\r\n2/12/2020 16:00:00,153.46\r\n2/13/2020 16:00:00,160.8\r\n2/14/2020 16:00:00,160.01\r\n2/18/2020 16:00:00,171.68\r\n2/19/2020 16:00:00,183.48\r\n2/20/2020 16:00:00,179.88\r\n2/21/2020 16:00:00,180.2\r\n2/24/2020 16:00:00,166.76\r\n2/25/2020 16:00:00,159.98\r\n2/26/2020 16:00:00,155.76\r\n2/27/2020 16:00:00,135.8\r\n2/28/2020 16:00:00,133.6\r\n3/2/2020 16:00:00,148.72\r\n3/3/2020 16:00:00,149.1\r\n3/4/2020 16:00:00,149.9\r\n3/5/2020 16:00:00,144.91\r\n3/6/2020 16:00:00,140.7\r\n3/9/2020 16:00:00,121.6\r\n3/10/2020 16:00:00,129.07\r\n3/11/2020 16:00:00,126.85\r\n3/12/2020 16:00:00,112.11\r\n3/13/2020 16:00:00,109.32\r\n3/16/2020 16:00:00,89.01\r\n3/17/2020 16:00:00,86.04\r\n3/18/2020 16:00:00,72.24\r\n3/19/2020 16:00:00,85.53\r\n3/20/2020 16:00:00,85.51\r\n3/23/2020 16:00:00,86.86\r\n3/24/2020 16:00:00,101\r\n3/25/2020 16:00:00,107.85\r\n3/26/2020 16:00:00,105.63\r\n3/27/2020 16:00:00,102.87\r\n3/30/2020 16:00:00,100.43\r\n3/31/2020 16:00:00,104.8\r\n4/1/2020 16:00:00,96.31\r\n4/2/2020 16:00:00,90.89\r\n4/3/2020 16:00:00,96\r\n4/6/2020 16:00:00,103.25\r\n4/7/2020 16:00:00,109.09\r\n4/8/2020 16:00:00,109.77\r\n4/9/2020 16:00:00,114.6\r\n4/13/2020 16:00:00,130.19\r\n4/14/2020 16:00:00,141.98\r\n4/15/2020 16:00:00,145.97\r\n4/16/2020 16:00:00,149.04\r\n4/17/2020 16:00:00,150.78\r\n4/20/2020 16:00:00,149.27\r\n4/21/2020 16:00:00,137.34\r\n4/22/2020 16:00:00,146.42\r\n4/23/2020 16:00:00,141.13\r\n4/24/2020 16:00:00,145.03\r\n4/27/2020 16:00:00,159.75\r\n4/28/2020 16:00:00,153.82\r\n4/29/2020 16:00:00,160.1\r\n4/30/2020 16:00:00,156.38\r\n5/1/2020 16:00:00,140.26\r\n5/4/2020 16:00:00,152.24\r\n5/5/2020 16:00:00,153.64\r\n5/6/2020 16:00:00,156.52\r\n5/7/2020 16:00:00,156.01\r\n5/8/2020 16:00:00,163.88\r\n5/11/2020 16:00:00,162.26\r\n5/12/2020 16:00:00,161.88\r\n5/13/2020 16:00:00,158.19\r\n5/14/2020 16:00:00,160.67\r\n5/15/2020 16:00:00,159.83\r\n5/18/2020 16:00:00,162.73\r\n5/19/2020 16:00:00,161.6\r\n5/20/2020 16:00:00,163.11\r\n5/21/2020 16:00:00,165.52\r\n5/22/2020 16:00:00,163.38\r\n5/26/2020 16:00:00,163.77\r\n5/27/2020 16:00:00,164.05\r\n5/28/2020 16:00:00,161.16\r\n5/29/2020 16:00:00,167\r\n6/1/2020 16:00:00,179.62\r\n6/2/2020 16:00:00,176.31\r\n6/3/2020 16:00:00,176.59\r\n6/4/2020 16:00:00,172.88\r\n6/5/2020 16:00:00,177.13\r\n6/8/2020 16:00:00,189.98\r\n6/9/2020 16:00:00,188.13\r\n6/10/2020 16:00:00,205.01\r\n6/11/2020 16:00:00,194.57\r\n6/12/2020 16:00:00,187.06\r\n6/15/2020 16:00:00,198.18\r\n6/16/2020 16:00:00,196.43\r\n6/17/2020 16:00:00,198.36\r\n6/18/2020 16:00:00,200.79\r\n6/19/2020 16:00:00,200.18\r\n6/22/2020 16:00:00,198.86\r\n6/23/2020 16:00:00,200.36\r\n6/24/2020 16:00:00,192.17\r\n6/25/2020 16:00:00,197.2\r\n6/26/2020 16:00:00,191.95\r\n6/29/2020 16:00:00,201.87\r\n6/30/2020 16:00:00,215.96\r\n7/1/2020 16:00:00,223.93\r\n7/2/2020 16:00:00,241.73\r\n7/6/2020 16:00:00,274.32\r\n7/7/2020 16:00:00,277.97\r\n7/8/2020 16:00:00,273.18\r\n7/9/2020 16:00:00,278.86\r\n7/10/2020 16:00:00,308.93\r\n7/13/2020 16:00:00,299.41\r\n7/14/2020 16:00:00,303.36\r\n7/15/2020 16:00:00,309.2\r\n7/16/2020 16:00:00,300.13\r\n7/17/2020 16:00:00,300.17\r\n7/20/2020 16:00:00,328.6\r\n7/21/2020 16:00:00,313.67\r\n7/22/2020 16:00:00,318.47\r\n7/23/2020 16:00:00,302.61\r\n7/24/2020 16:00:00,283.4\r\n7/27/2020 16:00:00,307.92\r\n7/28/2020 16:00:00,295.3\r\n7/29/2020 16:00:00,299.82\r\n7/30/2020 16:00:00,297.5\r\n7/31/2020 16:00:00,286.15\r\n8/3/2020 16:00:00,297\r\n8/4/2020 16:00:00,297.4\r\n8/5/2020 16:00:00,297\r\n8/6/2020 16:00:00,297.92\r\n8/7/2020 16:00:00,290.54\r\n8/10/2020 16:00:00,283.71\r\n8/11/2020 16:00:00,274.88\r\n8/12/2020 16:00:00,310.95\r\n8/13/2020 16:00:00,324.2\r\n8/14/2020 16:00:00,330.14\r\n8/17/2020 16:00:00,367.13\r\n8/18/2020 16:00:00,377.42\r\n8/19/2020 16:00:00,375.71\r\n8/20/2020 16:00:00,400.37\r\n8/21/2020 16:00:00,410\r\n8/24/2020 16:00:00,402.84\r\n8/25/2020 16:00:00,404.67\r\n8/26/2020 16:00:00,430.63\r\n8/27/2020 16:00:00,447.75\r\n8/28/2020 16:00:00,442.68\r\n8/31/2020 16:00:00,498.32\r\n9/1/2020 16:00:00,475.05\r\n9/2/2020 16:00:00,447.37\r\n9/3/2020 16:00:00,407\r\n9/4/2020 16:00:00,418.32\r\n9/8/2020 16:00:00,330.21\r\n9/9/2020 16:00:00,366.28\r\n9/10/2020 16:00:00,371.34\r\n9/11/2020 16:00:00,372.72\r\n9/14/2020 16:00:00,419.62\r\n9/15/2020 16:00:00,449.76\r\n9/16/2020 16:00:00,441.76\r\n9/17/2020 16:00:00,423.43\r\n9/18/2020 16:00:00,442.15\r\n9/21/2020 16:00:00,449.39\r\n9/22/2020 16:00:00,424.23\r\n9/23/2020 16:00:00,380.36\r\n9/24/2020 16:00:00,387.79\r\n9/25/2020 16:00:00,407.34\r\n9/28/2020 16:00:00,421.2\r\n9/29/2020 16:00:00,419.07\r\n9/30/2020 16:00:00,429.01\r\n10/1/2020 16:00:00,448.16\r\n10/2/2020 16:00:00,415.09\r\n10/5/2020 16:00:00,425.68\r\n10/6/2020 16:00:00,413.98\r\n10/7/2020 16:00:00,425.3\r\n10/8/2020 16:00:00,425.92\r\n10/9/2020 16:00:00,434\r\n10/12/2020 16:00:00,442.3\r\n10/13/2020 16:00:00,446.65\r\n10/14/2020 16:00:00,461.3\r\n10/15/2020 16:00:00,448.88\r\n10/16/2020 16:00:00,439.67\r\n10/19/2020 16:00:00,430.83\r\n10/20/2020 16:00:00,421.94\r\n10/21/2020 16:00:00,422.64\r\n10/22/2020 16:00:00,425.79\r\n10/23/2020 16:00:00,420.63\r\n10/26/2020 16:00:00,420.28\r\n10/27/2020 16:00:00,424.68\r\n10/28/2020 16:00:00,406.02\r\n10/29/2020 16:00:00,410.83\r\n10/30/2020 16:00:00,388.04\r\n11/2/2020 16:00:00,400.51\r\n11/3/2020 16:00:00,423.9\r\n11/4/2020 16:00:00,420.98\r\n11/5/2020 16:00:00,438.09\r\n11/6/2020 16:00:00,429.95\r\n11/9/2020 16:00:00,421.26\r\n11/10/2020 16:00:00,410.36\r\n11/11/2020 16:00:00,417.13\r\n11/12/2020 16:00:00,411.76\r\n11/13/2020 16:00:00,408.5\r\n11/16/2020 16:00:00,408.09\r\n11/17/2020 16:00:00,441.61\r\n11/18/2020 16:00:00,486.64\r\n11/19/2020 16:00:00,499.27\r\n11/20/2020 16:00:00,489.61\r\n11/23/2020 16:00:00,521.85\r\n11/24/2020 16:00:00,555.38\r\n11/25/2020 16:00:00,574\r\n11/27/2020 13:00:00,585.76\r\n11/30/2020 16:00:00,567.6\r\n12/1/2020 16:00:00,584.76\r\n12/2/2020 16:00:00,568.82\r\n12/3/2020 16:00:00,593.38\r\n12/4/2020 16:00:00,599.04\r\n12/7/2020 16:00:00,641.76\r\n12/8/2020 16:00:00,649.88\r\n12/9/2020 16:00:00,604.48\r\n12/10/2020 16:00:00,627.07\r\n12/11/2020 16:00:00,609.99\r\n12/14/2020 16:00:00,639.83\r\n12/15/2020 16:00:00,633.25\r\n12/16/2020 16:00:00,622.77\r\n12/17/2020 16:00:00,655.9\r\n12/18/2020 16:00:00,695\r\n12/21/2020 16:00:00,649.86\r\n12/22/2020 16:00:00,640.34\r\n12/23/2020 16:00:00,645.98\r\n12/24/2020 13:00:00,661.77\r\n12/28/2020 16:00:00,663.69\r\n12/29/2020 16:00:00,665.99\r\n12/30/2020 16:00:00,694.78\r\n12/31/2020 16:00:00,705.67\r\n1/4/2021 16:00:00,729.77\r\n1/5/2021 16:00:00,735.11\r\n1/6/2021 16:00:00,755.98\r\n1/7/2021 16:00:00,816.04\r\n1/8/2021 16:00:00,880.02\r\n1/11/2021 16:00:00,811.19\r\n1/12/2021 16:00:00,849.44\r\n1/13/2021 16:00:00,854.41\r\n1/14/2021 16:00:00,845\r\n1/15/2021 16:00:00,826.16\r\n1/19/2021 16:00:00,844.55\r\n1/20/2021 16:00:00,850.45\r\n1/21/2021 16:00:00,844.99\r\n1/22/2021 16:00:00,846.64\r\n1/25/2021 16:00:00,880.8\r\n1/26/2021 16:00:00,883.09\r\n1/27/2021 16:00:00,864.16\r\n1/28/2021 16:00:00,835.43\r\n1/29/2021 16:00:00,793.53\r\n2/1/2021 16:00:00,839.81\r\n2/2/2021 16:00:00,872.79\r\n2/3/2021 16:00:00,854.69\r\n2/4/2021 16:00:00,849.99\r\n2/5/2021 16:00:00,852.23\r\n2/8/2021 16:00:00,863.42\r\n2/9/2021 16:00:00,849.46\r\n2/10/2021 16:00:00,804.82\r\n2/11/2021 16:00:00,811.66\r\n2/12/2021 16:00:00,816.12\r\n2/16/2021 16:00:00,796.22\r\n2/17/2021 16:00:00,798.15\r\n2/18/2021 16:00:00,787.38\r\n2/19/2021 16:00:00,781.3\r\n2/22/2021 16:00:00,714.5\r\n2/23/2021 16:00:00,698.84\r\n2/24/2021 16:00:00,742.02\r\n2/25/2021 16:00:00,682.22\r\n2/26/2021 16:00:00,675.5\r\n3/1/2021 16:00:00,718.43\r\n3/2/2021 16:00:00,686.44\r\n3/3/2021 16:00:00,653.2\r\n3/4/2021 16:00:00,621.44\r\n3/5/2021 16:00:00,597.95\r\n3/8/2021 16:00:00,563\r\n3/9/2021 16:00:00,673.58\r\n3/10/2021 16:00:00,668.06\r\n3/11/2021 16:00:00,699.6\r\n3/12/2021 16:00:00,693.73\r\n3/15/2021 16:00:00,707.94\r\n3/16/2021 16:00:00,676.88\r\n3/17/2021 16:00:00,701.81\r\n3/18/2021 16:00:00,653.16\r\n3/19/2021 16:00:00,654.87\r\n3/22/2021 16:00:00,670\r\n3/23/2021 16:00:00,662.16\r\n3/24/2021 16:00:00,630.27\r\n3/25/2021 16:00:00,640.39\r\n3/26/2021 16:00:00,618.71\r\n3/29/2021 16:00:00,611.29\r\n3/30/2021 16:00:00,635.62\r\n3/31/2021 16:00:00,667.93\r\n4/1/2021 16:00:00,661.75\r\n4/5/2021 16:00:00,691.05\r\n4/6/2021 16:00:00,691.62\r\n4/7/2021 16:00:00,670.97\r\n4/8/2021 16:00:00,683.8\r\n4/9/2021 16:00:00,677.02\r\n4/12/2021 16:00:00,701.98\r\n4/13/2021 16:00:00,762.32\r\n4/14/2021 16:00:00,732.23\r\n4/15/2021 16:00:00,738.85\r\n4/16/2021 16:00:00,739.78\r\n4/19/2021 16:00:00,714.63\r\n4/20/2021 16:00:00,718.99\r\n4/21/2021 16:00:00,744.12\r\n4/22/2021 16:00:00,719.69\r\n4/23/2021 16:00:00,729.4\r\n4/26/2021 16:00:00,738.2\r\n4/27/2021 16:00:00,704.74\r\n4/28/2021 16:00:00,694.4\r\n4/29/2021 16:00:00,677\r\n4/30/2021 16:00:00,709.44\r\n5/3/2021 16:00:00,684.9\r\n5/4/2021 16:00:00,673.6\r\n5/5/2021 16:00:00,670.94\r\n5/6/2021 16:00:00,663.54\r\n5/7/2021 16:00:00,672.37\r\n5/10/2021 16:00:00,629.04\r\n5/11/2021 16:00:00,617.2\r\n5/12/2021 16:00:00,589.89\r\n5/13/2021 16:00:00,571.69\r\n5/14/2021 16:00:00,589.74\r\n5/17/2021 16:00:00,576.83\r\n5/18/2021 16:00:00,577.87\r\n5/19/2021 16:00:00,563.46\r\n5/20/2021 16:00:00,586.78\r\n5/21/2021 16:00:00,580.88\r\n5/24/2021 16:00:00,606.44\r\n5/25/2021 16:00:00,604.69\r\n5/26/2021 16:00:00,619.13\r\n5/27/2021 16:00:00,630.85\r\n5/28/2021 16:00:00,625.22\r\n6/1/2021 16:00:00,623.9\r\n6/2/2021 16:00:00,605.12\r\n6/3/2021 16:00:00,572.84\r\n6/4/2021 16:00:00,599.05\r\n6/7/2021 16:00:00,605.13\r\n6/8/2021 16:00:00,603.59\r\n6/9/2021 16:00:00,598.78\r\n6/10/2021 16:00:00,610.12\r\n6/11/2021 16:00:00,609.89\r\n6/14/2021 16:00:00,617.69\r\n6/15/2021 16:00:00,599.36\r\n6/16/2021 16:00:00,604.87\r\n6/17/2021 16:00:00,616.6\r\n6/18/2021 16:00:00,623.31\r\n6/21/2021 16:00:00,620.83\r\n6/22/2021 16:00:00,623.71\r\n6/23/2021 16:00:00,656.57\r\n6/24/2021 16:00:00,679.82\r\n6/25/2021 16:00:00,671.87\r\n6/28/2021 16:00:00,688.72\r\n6/29/2021 16:00:00,680.76\r\n6/30/2021 16:00:00,679.7\r\n7/1/2021 16:00:00,677.92\r\n7/2/2021 16:00:00,678.9\r\n7/6/2021 16:00:00,659.58\r\n7/7/2021 16:00:00,644.65\r\n7/8/2021 16:00:00,652.81\r\n7/9/2021 16:00:00,656.95\r\n7/12/2021 16:00:00,685.7\r\n7/13/2021 16:00:00,668.54\r\n7/14/2021 16:00:00,653.38\r\n7/15/2021 16:00:00,650.6\r\n7/16/2021 16:00:00,644.22\r\n7/19/2021 16:00:00,646.22\r\n7/20/2021 16:00:00,660.5\r\n7/21/2021 16:00:00,655.29\r\n7/22/2021 16:00:00,649.26\r\n7/23/2021 16:00:00,643.38\r\n7/26/2021 16:00:00,657.62\r\n7/27/2021 16:00:00,644.78\r\n7/28/2021 16:00:00,646.98\r\n7/29/2021 16:00:00,677.35\r\n7/30/2021 16:00:00,687.2\r\n8/2/2021 16:00:00,709.67\r\n8/3/2021 16:00:00,709.74\r\n8/4/2021 16:00:00,710.92\r\n8/5/2021 16:00:00,714.63\r\n8/6/2021 16:00:00,699.1\r\n8/9/2021 16:00:00,713.76\r\n8/10/2021 16:00:00,709.99\r\n8/11/2021 16:00:00,707.82\r\n8/12/2021 16:00:00,722.25\r\n8/13/2021 16:00:00,717.17\r\n8/16/2021 16:00:00,686.17\r\n8/17/2021 16:00:00,665.71\r\n8/18/2021 16:00:00,688.99\r\n8/19/2021 16:00:00,673.47\r\n8/20/2021 16:00:00,680.26\r\n8/23/2021 16:00:00,706.3\r\n8/24/2021 16:00:00,708.49\r\n8/25/2021 16:00:00,711.2\r\n8/26/2021 16:00:00,701.16\r\n8/27/2021 16:00:00,711.92\r\n8/30/2021 16:00:00,730.91\r\n8/31/2021 16:00:00,735.72\r\n9/1/2021 16:00:00,734.09\r\n9/2/2021 16:00:00,732.39\r\n9/3/2021 16:00:00,733.57\r\n9/7/2021 16:00:00,752.92\r\n9/8/2021 16:00:00,753.87\r\n9/9/2021 16:00:00,754.86\r\n9/10/2021 16:00:00,736.27\r\n9/13/2021 16:00:00,743\r\n9/14/2021 16:00:00,744.49\r\n9/15/2021 16:00:00,755.83\r\n9/16/2021 16:00:00,756.99\r\n9/17/2021 16:00:00,759.49\r\n9/20/2021 16:00:00,730.17\r\n9/21/2021 16:00:00,739.38\r\n9/22/2021 16:00:00,751.94\r\n9/23/2021 16:00:00,753.64\r\n9/24/2021 16:00:00,774.39\r\n9/27/2021 16:00:00,791.36\r\n9/28/2021 16:00:00,777.56\r\n9/29/2021 16:00:00,781.31\r\n9/30/2021 16:00:00,775.48\r\n10/1/2021 16:00:00,775.22\r\n10/4/2021 16:00:00,781.53\r\n10/5/2021 16:00:00,780.59\r\n10/6/2021 16:00:00,782.75\r\n10/7/2021 16:00:00,793.61\r\n10/8/2021 16:00:00,785.49\r\n10/11/2021 16:00:00,791.94\r\n10/12/2021 16:00:00,805.72\r\n10/13/2021 16:00:00,811.08\r\n10/14/2021 16:00:00,818.32\r\n10/15/2021 16:00:00,843.03\r\n10/18/2021 16:00:00,870.11\r\n10/19/2021 16:00:00,864.27\r\n10/20/2021 16:00:00,865.8\r\n10/21/2021 16:00:00,894\r\n10/22/2021 16:00:00,909.68\r\n10/25/2021 16:00:00,1024.86\r\n10/26/2021 16:00:00,1018.43\r\n10/27/2021 16:00:00,1037.86\r\n10/28/2021 16:00:00,1077.04\r\n10/29/2021 16:00:00,1114\r\n11/1/2021 16:00:00,1208.59\r\n11/2/2021 16:00:00,1172\r\n11/3/2021 16:00:00,1213.86\r\n11/4/2021 16:00:00,1229.91\r\n11/5/2021 16:00:00,1222.09\r\n11/8/2021 16:00:00,1162.94\r\n11/9/2021 16:00:00,1023.5\r\n11/10/2021 16:00:00,1067.95\r\n11/11/2021 16:00:00,1063.51\r\n11/12/2021 16:00:00,1033.42\r\n11/15/2021 16:00:00,1013.39\r\n11/16/2021 16:00:00,1054.73\r\n11/17/2021 16:00:00,1089.01\r\n11/18/2021 16:00:00,1096.38\r\n11/19/2021 16:00:00,1137.06\r\n11/22/2021 16:00:00,1156.87\r\n11/23/2021 16:00:00,1109.03\r\n11/24/2021 16:00:00,1116\r\n11/26/2021 13:00:00,1081.92\r\n11/29/2021 16:00:00,1136.99\r\n11/30/2021 16:00:00,1144.76\r\n12/1/2021 16:00:00,1095\r\n12/2/2021 16:00:00,1084.6\r\n12/3/2021 16:00:00,1014.97\r\n12/6/2021 16:00:00,1009.01\r\n12/7/2021 16:00:00,1051.75\r\n12/8/2021 16:00:00,1068.96\r\n12/9/2021 16:00:00,1003.8\r\n12/10/2021 16:00:00,1017.03\r\n12/13/2021 16:00:00,966.41\r\n12/14/2021 16:00:00,958.51\r\n12/15/2021 16:00:00,975.99\r\n12/16/2021 16:00:00,926.92\r\n12/17/2021 16:00:00,932.57\r\n12/20/2021 16:00:00,899.94\r\n12/21/2021 16:00:00,938.53\r\n12/22/2021 16:00:00,1008.87\r\n12/23/2021 16:00:00,1067\r\n12/27/2021 16:00:00,1093.94\r\n12/28/2021 16:00:00,1088.47\r\n12/29/2021 16:00:00,1086.19\r\n12/30/2021 16:00:00,1070.34\r\n12/31/2021 16:00:00,1056.78\r\n1/3/2022 16:00:00,1199.78\r\n1/4/2022 16:00:00,1149.59\r\n1/5/2022 16:00:00,1088.12\r\n1/6/2022 16:00:00,1064.7\r\n1/7/2022 16:00:00,1026.96\r\n1/10/2022 16:00:00,1058.12\r\n1/11/2022 16:00:00,1064.4\r\n1/12/2022 16:00:00,1106.22\r\n1/13/2022 16:00:00,1031.56\r\n1/14/2022 16:00:00,1049.61\r\n1/18/2022 16:00:00,1030.51\r\n1/19/2022 16:00:00,995.65\r\n1/20/2022 16:00:00,996.27\r\n1/21/2022 16:00:00,943.9\r\n1/24/2022 16:00:00,930\r\n1/25/2022 16:00:00,918.4\r\n1/26/2022 16:00:00,937.41\r\n1/27/2022 16:00:00,829.1\r\n1/28/2022 16:00:00,846.35\r\n1/31/2022 16:00:00,936.72\r\n2/1/2022 16:00:00,931.25\r\n2/2/2022 16:00:00,905.66\r\n2/3/2022 16:00:00,891.14\r\n2/4/2022 16:00:00,923.32\r\n2/7/2022 16:00:00,907.34\r\n2/8/2022 16:00:00,922\r\n2/9/2022 16:00:00,932\r\n2/10/2022 16:00:00,904.55\r\n2/11/2022 16:00:00,860\r\n2/14/2022 16:00:00,875.76\r\n2/15/2022 16:00:00,922.43\r\n2/16/2022 16:00:00,923.39\r\n2/17/2022 16:00:00,876.35\r\n2/18/2022 16:00:00,856.98\r\n2/22/2022 16:00:00,821.53\r\n2/23/2022 16:00:00,764.04\r\n2/24/2022 16:00:00,800.77\r\n2/25/2022 16:00:00,809.87\r\n2/28/2022 16:00:00,870.43\r\n3/1/2022 16:00:00,864.37\r\n3/2/2022 16:00:00,879.89\r\n3/3/2022 16:00:00,839.29\r\n3/4/2022 16:00:00,838.29\r\n3/7/2022 16:00:00,804.58\r\n3/8/2022 16:00:00,824.4\r\n3/9/2022 16:00:00,858.97\r\n3/10/2022 16:00:00,838.3\r\n3/11/2022 16:00:00,795.35\r\n3/14/2022 16:00:00,766.37\r\n3/15/2022 16:00:00,801.89\r\n3/16/2022 16:00:00,840.23\r\n3/17/2022 16:00:00,871.6\r\n3/18/2022 16:00:00,905.39\r\n3/21/2022 16:00:00,921.16\r\n3/22/2022 16:00:00,993.98\r\n3/23/2022 16:00:00,999.11\r\n3/24/2022 16:00:00,1013.92\r\n3/25/2022 16:00:00,1010.64\r\n3/28/2022 16:00:00,1091.84\r\n3/29/2022 16:00:00,1099.57\r\n3/30/2022 16:00:00,1093.99\r\n3/31/2022 16:00:00,1077.6\r\n4/1/2022 16:00:00,1084.59\r\n4/4/2022 16:00:00,1145.45\r\n4/5/2022 16:00:00,1091.26\r\n4/6/2022 16:00:00,1045.76\r\n4/7/2022 16:00:00,1057.26\r\n4/8/2022 16:00:00,1025.49\r\n4/11/2022 16:00:00,975.93\r\n4/12/2022 16:00:00,986.95\r\n4/13/2022 16:00:00,1022.37\r\n4/14/2022 16:00:00,985\r\n4/18/2022 16:00:00,1004.29\r\n4/19/2022 16:00:00,1028.15\r\n4/20/2022 16:00:00,977.2\r\n4/21/2022 16:00:00,1008.78\r\n4/22/2022 16:00:00,1005.05".split(/\r?\n/).forEach(function(line) {
        var cols=line.split(',');
        var date=cols[0];
        var price=cols[1];

        data.push({date:date,price:price});

});

    return data;

}

},{}],2:[function(require,module,exports){
var data=require('./data');
var stockdata=data.readStockData();

console.table(stockdata);

window.stockdata=stockdata;
},{"./data":1}]},{},[2]);