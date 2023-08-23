import React from "react";
import clsx from "clsx";

// Icons
import { ReactComponent as svg_arrow_bottom } from "assets/icons/icon-arrow-bottom.svg";
import { ReactComponent as svg_arrow_left } from "assets/icons/icon-arrow-left.svg";
import { ReactComponent as svg_arrow_right } from "assets/icons/icon-arrow-right.svg";
import { ReactComponent as svg_arrow_top } from "assets/icons/icon-arrow-top.svg";
import { ReactComponent as svg_attach } from "assets/icons/icon-attach.svg";
import { ReactComponent as svg_back } from "assets/icons/icon-back.svg";
import { ReactComponent as svg_bar } from "assets/icons/icon-bar.svg";
import { ReactComponent as svg_calendar } from "assets/icons/icon-calendar.svg";
import { ReactComponent as svg_check } from "assets/icons/icon-check.svg";
import { ReactComponent as svg_close } from "assets/icons/icon-close.svg";
import { ReactComponent as svg_download } from "assets/icons/icon-download.svg";
import { ReactComponent as svg_draw_line_free } from "assets/icons/icon-draw-line-free.svg";
import { ReactComponent as svg_draw_line } from "assets/icons/icon-draw-line.svg";
import { ReactComponent as svg_draw_point } from "assets/icons/icon-draw-point.svg";
import { ReactComponent as svg_draw_polygon_free } from "assets/icons/icon-draw-polygon-free.svg";
import { ReactComponent as svg_draw_polygon } from "assets/icons/icon-draw-polygon.svg";
import { ReactComponent as svg_draw_text } from "assets/icons/icon-draw-text.svg";
import { ReactComponent as svg_draw } from "assets/icons/icon-draw.svg";
import { ReactComponent as svg_edit } from "assets/icons/icon-edit.svg";
import { ReactComponent as svg_eraser } from "assets/icons/icon-eraser.svg";
import { ReactComponent as svg_error } from "assets/icons/icon-error.svg";
import { ReactComponent as svg_feedback } from "assets/icons/icon-feedback.svg";
import { ReactComponent as svg_file_doc } from "assets/icons/icon-file-doc.svg";
import { ReactComponent as svg_file_img } from "assets/icons/icon-file-img.svg";
import { ReactComponent as svg_file_pdf } from "assets/icons/icon-file-pdf.svg";
import { ReactComponent as svg_file_ppt } from "assets/icons/icon-file-ppt.svg";
import { ReactComponent as svg_file_table } from "assets/icons/icon-file-table.svg";
import { ReactComponent as svg_file_text } from "assets/icons/icon-file-text.svg";
import { ReactComponent as svg_file_unknown } from "assets/icons/icon-file-unknown.svg";
import { ReactComponent as svg_file_xls } from "assets/icons/icon-file-xls.svg";
import { ReactComponent as svg_file_zip } from "assets/icons/icon-file-zip.svg";
import { ReactComponent as svg_filter } from "assets/icons/icon-filter.svg";
import { ReactComponent as svg_folder } from "assets/icons/icon-folder.svg";
import { ReactComponent as svg_geolocation } from "assets/icons/icon-geolocation.svg";
import { ReactComponent as svg_help } from "assets/icons/icon-help.svg";
import { ReactComponent as svg_indeterminate } from "assets/icons/icon-indeterminate.svg";
import { ReactComponent as svg_info } from "assets/icons/icon-info.svg";
import { ReactComponent as svg_layers } from "assets/icons/icon-layers.svg";
import { ReactComponent as svg_legend } from "assets/icons/icon-legend.svg";
import { ReactComponent as svg_line } from "assets/icons/icon-line.svg";
import { ReactComponent as svg_link } from "assets/icons/icon-link.svg";
import { ReactComponent as svg_list } from "assets/icons/icon-list.svg";
import { ReactComponent as svg_login } from "assets/icons/icon-login.svg";
import { ReactComponent as svg_logout } from "assets/icons/icon-logout.svg";
import { ReactComponent as svg_map } from "assets/icons/icon-map.svg";
import { ReactComponent as svg_maximize } from "assets/icons/icon-maximize.svg";
import { ReactComponent as svg_measurement_area } from "assets/icons/icon-measurement-area.svg";
import { ReactComponent as svg_measurement_distance } from "assets/icons/icon-measurement-distance.svg";
import { ReactComponent as svg_measurement_point } from "assets/icons/icon-measurement-point.svg";
import { ReactComponent as svg_measurement_radius } from "assets/icons/icon-measurement-radius.svg";
import { ReactComponent as svg_measurement } from "assets/icons/icon-measurement.svg";
import { ReactComponent as svg_media } from "assets/icons/icon-media.svg";
import { ReactComponent as svg_menu } from "assets/icons/icon-menu.svg";
import { ReactComponent as svg_minimize } from "assets/icons/icon-minimize.svg";
import { ReactComponent as svg_minus } from "assets/icons/icon-minus.svg";
import { ReactComponent as svg_more } from "assets/icons/icon-more.svg";
import { ReactComponent as svg_opacity } from "assets/icons/icon-opacity.svg";
import { ReactComponent as svg_open } from "assets/icons/icon-open.svg";
import { ReactComponent as svg_pdf } from "assets/icons/icon-pdf.svg";
import { ReactComponent as svg_plus } from "assets/icons/icon-plus.svg";
import { ReactComponent as svg_print } from "assets/icons/icon-print.svg";
import { ReactComponent as svg_refresh } from "assets/icons/icon-refresh.svg";
import { ReactComponent as svg_search } from "assets/icons/icon-search.svg";
import { ReactComponent as svg_substrate } from "assets/icons/icon-substrate.svg";
import { ReactComponent as svg_success } from "assets/icons/icon-success.svg";
import { ReactComponent as svg_table } from "assets/icons/icon-table.svg";
import { ReactComponent as svg_trash } from "assets/icons/icon-trash.svg";
import { ReactComponent as svg_waning } from "assets/icons/icon-warning.svg";
import { ReactComponent as svg_zoom } from "assets/icons/icon-zoom.svg";

import "./style.scss";

export const createSvgIcon = (
    Icon: React.ElementType<React.SVGProps<SVGSVGElement>>,
    svg_props: React.SVGProps<SVGSVGElement> = {}
) => (props: React.SVGProps<SVGSVGElement>) => (
    <span
        className={clsx("wrapper-icon", props.className)}
        style={{ display: "flex", lineHeight: 0 }}
    >
        <Icon
            viewBox="0 0 20 20"
            width="1em"
            height="1em"
            fill="currentColor"
            {...svg_props}
        />
    </span>
);

export namespace Icons {
    export const ArrowBottom = createSvgIcon(svg_arrow_bottom);
    export const ArrowLeft = createSvgIcon(svg_arrow_left);
    export const ArrowRight = createSvgIcon(svg_arrow_right);
    export const ArrowTop = createSvgIcon(svg_arrow_top);
    export const Attach = createSvgIcon(svg_attach);
    export const Back = createSvgIcon(svg_back);
    export const Bar = createSvgIcon(svg_bar);
    export const Calendar = createSvgIcon(svg_calendar);
    export const Check = createSvgIcon(svg_check);
    export const Close = createSvgIcon(svg_close);
    export const Download = createSvgIcon(svg_download);
    export const DrawLineFree = createSvgIcon(svg_draw_line_free);
    export const DrawLine = createSvgIcon(svg_draw_line);
    export const DrawPoint = createSvgIcon(svg_draw_point);
    export const DrawPolygonFree = createSvgIcon(svg_draw_polygon_free);
    export const DrawPolygon = createSvgIcon(svg_draw_polygon);
    export const DrawText = createSvgIcon(svg_draw_text);
    export const Draw = createSvgIcon(svg_draw);
    export const Edit = createSvgIcon(svg_edit);
    export const Eraser = createSvgIcon(svg_eraser);
    export const Error = createSvgIcon(svg_error);
    export const Feedback = createSvgIcon(svg_feedback);
    export const FileDoc = createSvgIcon(svg_file_doc);
    export const FileImg = createSvgIcon(svg_file_img);
    export const FilePdf = createSvgIcon(svg_file_pdf);
    export const FilePpt = createSvgIcon(svg_file_ppt);
    export const FileTable = createSvgIcon(svg_file_table);
    export const FileText = createSvgIcon(svg_file_text);
    export const FileUnknown = createSvgIcon(svg_file_unknown);
    export const FileXls = createSvgIcon(svg_file_xls);
    export const FileZip = createSvgIcon(svg_file_zip);
    export const Filter = createSvgIcon(svg_filter);
    export const Folder = createSvgIcon(svg_folder);
    export const Geolocation = createSvgIcon(svg_geolocation);
    export const Help = createSvgIcon(svg_help);
    export const Indeterminate = createSvgIcon(svg_indeterminate);
    export const Info = createSvgIcon(svg_info);
    export const Layers = createSvgIcon(svg_layers);
    export const Legend = createSvgIcon(svg_legend);
    export const Line = createSvgIcon(svg_line);
    export const Link = createSvgIcon(svg_link);
    export const List = createSvgIcon(svg_list);
    export const Login = createSvgIcon(svg_login);
    export const Logout = createSvgIcon(svg_logout);
    export const Map = createSvgIcon(svg_map);
    export const Maximize = createSvgIcon(svg_maximize);
    export const MeasurementArea = createSvgIcon(svg_measurement_area);
    export const MeasurementDistance = createSvgIcon(svg_measurement_distance);
    export const MeasurementPoint = createSvgIcon(svg_measurement_point);
    export const MeasurementRadius = createSvgIcon(svg_measurement_radius);
    export const Measurement = createSvgIcon(svg_measurement);
    export const Media = createSvgIcon(svg_media);
    export const Menu = createSvgIcon(svg_menu);
    export const Minimize = createSvgIcon(svg_minimize);
    export const Minus = createSvgIcon(svg_minus);
    export const More = createSvgIcon(svg_more);
    export const Opacity = createSvgIcon(svg_opacity);
    export const Open = createSvgIcon(svg_open);
    export const Pdf = createSvgIcon(svg_pdf);
    export const Plus = createSvgIcon(svg_plus);
    export const Print = createSvgIcon(svg_print);
    export const Refresh = createSvgIcon(svg_refresh);
    export const Search = createSvgIcon(svg_search);
    export const Substrate = createSvgIcon(svg_substrate);
    export const Success = createSvgIcon(svg_success);
    export const Table = createSvgIcon(svg_table);
    export const Trash = createSvgIcon(svg_trash);
    export const Warning = createSvgIcon(svg_waning);
    export const Zoom = createSvgIcon(svg_zoom);
}
