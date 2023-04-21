package com.ssafy.semes.dashboard.model;


import com.ssafy.semes.oht.model.OHTEntity;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@ToString
@AllArgsConstructor
public class OHTCheckResponseDto {
    private long ohtCheckId;
    private LocalDateTime ohtCheckStartDatetime;
    private LocalDateTime ohtCheckEndDatetime;
    private int goodCount;
    private int outCount;
    private int loseCount;
    private int unclassifiedCount;
    private long ohtId;
    private List<Long> wheelHistoryId;

}