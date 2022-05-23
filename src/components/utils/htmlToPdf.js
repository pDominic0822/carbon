/*
 * @Author: zhangln
 * @Date: 2020-04-18 16:30:24
 * @Description: 33
 */
import html2Canvas from 'html2canvas';
import JsPDF from 'jspdf';
export default {
	install (Vue, options) {
		Vue.prototype.getPdf = function (id, htmlTitle) {
			var title = htmlTitle;
			html2Canvas(document.querySelector('#' + id), {
				allowTaint: true
			}).then(function (canvas) {
				let contentWidth = canvas.width || 500;
				let contentHeight = canvas.height || 500;
				let pageHeight = contentWidth / 592.28 * 841.89;
				let leftHeight = contentHeight;
				let position = 0;
				let imgWidth = 595.28;
				let imgHeight = 592.28 / contentWidth * contentHeight;
				let pageData = canvas.toDataURL('image/jpeg', 1.0);
				let PDF = new JsPDF('', 'pt', 'a4');
				if (leftHeight < pageHeight) {
					PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
				} else {
					while (leftHeight > 0) {
						PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
						leftHeight -= pageHeight;
						position -= 841.89;
						if (leftHeight > 0) {
							PDF.addPage();
						}
					};
				}
				PDF.save(title + '.pdf');
			});
		};
	}
};
