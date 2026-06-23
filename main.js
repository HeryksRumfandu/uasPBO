// =======================
// KUNCI JAWABAN 60 SOAL
// =======================

const answerKey = {
  // 1–10
  1: { type: "multi", correct: ["Factory", "Singleton"] },

  2: { type: "text", correctText: "icurrency" },

  3: {
    type: "multi",
    correct: ["SingletonAllClasses","CompositeDefinition", "PatternDefinition"]
  },

  4: {
    type: "multi",
    correct: ["Consequences", "Solution", "Name", "Problem"]
  },

  5: {
    type: "multi",
    // test case yang failed: testIncrement dan testDecrement
    correct: ["testIncrement", "testDecrement"]
  },

  6: {
    type: "single",
    correct: ["DefineColumnNames"]
  },

  7: {
    type: "single",
    correct: ["False"]
  },

  8: {
    type: "single",
    correct: ["JFrameForm"]
  },

  9: {
    type: "single",
    correct: ["True"]
  },

  10: {
    type: "single",
    correct: ["True"]
  },
  
  // 11–20
  11: {
    type: "single",
    correct: ["Structural"]
  },

  12: {
    type: "single",
    correct: ["interface"]
  },

  13: {
  type: "text",
  correctText: "icurrency"
},

  14: {
    type: "text",
    correctText: "cohesion"
  },

  15: {
    type: "single",
    correct: ["False"]
  },

  16: {
    type: "multi",
    correct: [
      "EntityLayer",
      "InterfaceLayer",
      "ControlLayer",
      "PersistenceLayer"
    ]
  },

  17: {
    type: "single",
    // test case amount 0, balance 5000, expected "amount must be >= 0" -> benar
    correct: ["False"]
  },

  18: {
  type: "multi",
  correct: ["BusinessLogic", "Penghubung", "Kalkulasi"]
},

  19: {
    type: "single",
    // amount 5000, balance 5000, expected -- -> benar
    correct: ["True"]
  },

  20: {
    type: "single",
    correct: ["Mahasiswa"]
  },

  // 21–30
  21: {
    type: "dropdown",
    correctDropdown: {
      "q21-1": "ISP",
      "q21-2": "LSP",
      "q21-3": "OCP"
    }
  },

  22: {
    type: "single",
    correct: ["private static Administrator instance = null;"]
  },

  23: {
    type: "single",
    correct: ["True"]
  },

  24: {
    type: "text",
    correctText: "factory"
  },

  25: {
    type: "single",
    correct: ["True"]
  },

  26: {
    type: "multi",
    correct: ["Behavioral", "Creational", "Structural"]
  },

  27: {
    type: "text",
    correctText: "singleton"
  },

  28: {
    type: "single",
    correct: ["control"]
  },

  29: {
    type: "text",
    correctText: "7"
  },

  30: {
    type: "text",
    correctText: "observer"
  },

  // 31–40
  31: {
    type: "single",
    correct: ["PersistentObject"]
  },

  32: {
    type: "single",
    correct: ["InterfaceSubject"]
  },

  33: {
    type: "single",
    // KECUALI: Method testing (Unit testing)
    correct: ["MethodTesting"]
  },

  34: {
    type: "single",
    correct: ['assertEquals("Michael Jordan",result);']
  },

  35: {
  type: "multi",
  correct: [
    "assertFalse",
    "assertNotSame",
    "assertNull"
  ]
},
  36: {
  type: "multi", // Diubah menjadi 'multiple' karena jawabannya lebih dari satu
  correct: ["SebuahKelas", "Fungsi", "BeberapaMethod"]
},

  37: {
    type: "single",
    correct: ["Factory"]
  },

  38: {
    type: "multi",
    // pernyataan benar tentang pattern pada Gambar 3
    correct: ["PreEffectSubject","PostNoEffectISubject","PostNoEffectSubject"]
  },

  39: {
    type: "single",
    // BankAccount dengan operasi buka/simpan/tarik -> 
    correct: ["ISP"]
  },

  40: {
    type: "single",
    correct: ["False"]
  },

  // 41–50
  41: {
    type: "single",
    // CounterTest tidak 100% failed
    correct: ["False"]
  },

  42: {
    type: "single",
    // executeQuery -> ambil data
    correct: ["PengambilanData"]
  },

  43: {
    type: "single",
    correct: ["Observer"]
  },

  44: {
    type: "single",
    correct: ["False"]
  },

  45: {
    type: "single",
    correct: ["False"]
  },

  46: {
    type: "multi",
    correct: ["Orang tua", "Wali", "Dosen Pembimbing"]
  },

  47: {
    type: "multi", 
    // Mengubah tipe menjadi 'multiple' karena terdapat 3 jawaban yang benar
    correct: ["jTextField", "jComboBox", "jPanel"] 
},

  48: {
    type: "text",
    correctText: "loose"
  },

  49: {
    type: "multi",
    // executeUpdate -> perubahan data (INSERT/UPDATE/DELETE)
    correct: ["Delete","InsertUpdate","PerubahanData"]
  },

  50: {
    type: "multi",
    // KECUALI: pernyataan yang SALAH
    correct: ["OCPNotUsed", "BankAccountAbstract"]
  },

  // 51–60
  51: {
    type: "multi",
    correct: ["Opt2", "Opt3"]
  },

  52: {
    type: "multi",
    correct: ["OpenMahasiswa","CloseProdi"]
  },

  53: {
    type: "single",
    correct: ["AbstractTableModel"]
  },

  54: {
    type: "single",
    // return dataMahasiswa padahal deklarasi return TableMahasiswa -> salah
    correct: ["False"]
  },

  55: {
    type: "multi",
    correct: [
      "PopTopGt0Expect23",
      "Push23TopLtMax1",
      "Push34TopEqMax1"
    ]
  },

  56: {
    type: "single",
    correct: ["True"]
  },

  57: {
    type: "text",
    correctText: "5"
  },

  58: {
    type: "single",
    correct: ["TestFixture"]
  },

  59: {
    type: "single",
    correct: ["dao"]
  },

  60: {
    type: "single",
    correct: ["Composite"]
  }
};

// =======================
// UTIL
// =======================

function arraysEqualUnordered(a, b) {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  return sortedA.every((v, i) => v === sortedB[i]);
}

function setQuestionState(questionSection, state) {
  questionSection.classList.remove("correct", "incorrect");
  if (state === "correct") {
    questionSection.classList.add("correct");
  } else if (state === "incorrect") {
    questionSection.classList.add("incorrect");
  }
}

// =======================
// HANDLING BUTTON: SINGLE & MULTI
// =======================

const optionButtons = document.querySelectorAll(".option-btn");

optionButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const optionsContainer = btn.parentElement;
    const questionSection = optionsContainer.closest(".question");
    const qIdAttr = btn.dataset.question;
    const qId = parseInt(qIdAttr, 10);
    const key = answerKey[qId];
    if (!key) return;

    const isMulti = optionsContainer.getAttribute("data-multi") === "true";

    // reset warna benar/salah sebelumnya
    optionsContainer.querySelectorAll(".option-btn").forEach(b => {
      b.classList.remove("option-correct", "option-wrong");
    });

    if (!isMulti) {
      // SINGLE CHOICE
      optionsContainer
        .querySelectorAll(".option-btn")
        .forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");

      const value = btn.dataset.value;
      const correctValues = key.correct || [];
      const isCorrect = correctValues.includes(value);

      if (isCorrect) {
        btn.classList.add("option-correct");
        setQuestionState(questionSection, "correct");
      } else {
        btn.classList.add("option-wrong");
        optionsContainer.querySelectorAll(".option-btn").forEach(b => {
          if (correctValues.includes(b.dataset.value)) {
            b.classList.add("option-correct");
          }
        });
        setQuestionState(questionSection, "incorrect");
      }
    } else {
      // MULTI CHOICE
      btn.classList.toggle("selected");

      const selectedButtons = optionsContainer.querySelectorAll(
        ".option-btn.selected"
      );
      const selectedValues = Array.from(selectedButtons).map(
        b => b.dataset.value
      );
      const correctValues = key.correct || [];

      if (selectedValues.length === 0) {
        setQuestionState(questionSection, null);
        return;
      }

      if (arraysEqualUnordered(selectedValues, correctValues)) {
        optionsContainer.querySelectorAll(".option-btn").forEach(b => {
          b.classList.remove("option-wrong");
          if (
            correctValues.includes(b.dataset.value) &&
            b.classList.contains("selected")
          ) {
            b.classList.add("option-correct");
          } else {
            b.classList.remove("option-correct");
          }
        });
        setQuestionState(questionSection, "correct");
      } else {
        optionsContainer.querySelectorAll(".option-btn").forEach(b => {
          b.classList.remove("option-correct", "option-wrong");
        });

        selectedButtons.forEach(b => b.classList.add("option-wrong"));

        optionsContainer.querySelectorAll(".option-btn").forEach(b => {
          if (correctValues.includes(b.dataset.value)) {
            b.classList.add("option-correct");
          }
        });

        setQuestionState(questionSection, "incorrect");
      }
    }
  });
});

// =======================
// DROPDOWN
// =======================

function handleDropdownQuestion(qId, dropdownIds) {
  const key = answerKey[qId];
  if (!key || key.type !== "dropdown") return;

  dropdownIds.forEach(selectId => {
    const sel = document.getElementById(selectId);
    if (!sel) return;

    sel.addEventListener("change", () => {
      const questionSection = sel.closest(".question");
      const expected = key.correctDropdown;
      let allMatch = true;

      dropdownIds.forEach(id => {
        const s = document.getElementById(id);
        if (!s) return;
        s.classList.remove("dropdown-correct", "dropdown-wrong");
      });

      for (const id in expected) {
        const s = document.getElementById(id);
        if (!s) continue;
        if (s.value !== expected[id]) {
          allMatch = false;
        }
      }

      if (allMatch) {
        dropdownIds.forEach(id => {
          const s = document.getElementById(id);
          if (!s) return;
          s.classList.add("dropdown-correct");
        });
        setQuestionState(questionSection, "correct");
      } else {
        for (const id in expected) {
          const s = document.getElementById(id);
          if (!s) continue;
          if (s.value && s.value !== expected[id]) {
            s.classList.add("dropdown-wrong");
          }
        }
        setQuestionState(questionSection, "incorrect");
      }
    });
  });
}

// sesuaikan dengan dropdown yang ada
handleDropdownQuestion(10, ["q10-1", "q10-2", "q10-3"]);
handleDropdownQuestion(21, ["q21-1", "q21-2", "q21-3"]);

// =======================
// TEXT INPUT
// =======================

function handleTextQuestion(qId) {
  const key = answerKey[qId];
  if (!key || key.type !== "text") return;

  const questionSection = document.getElementById(`q${qId}`);
  if (!questionSection) return;

  const input = questionSection.querySelector(".text-input");
  if (!input) return;

  input.addEventListener("blur", () => {
    const raw = input.value;
    const userText = raw.trim().toLowerCase();
    input.classList.remove("text-correct", "text-wrong");

    if (!userText) {
      setQuestionState(questionSection, null);
      return;
    }

    if (userText === key.correctText) {
      input.classList.add("text-correct");
      setQuestionState(questionSection, "correct");
    } else {
      input.classList.add("text-wrong");
      setQuestionState(questionSection, "incorrect");
    }
  });
}

// daftar soal text
[2, 13, 14, 24, 27, 29, 30, 48, 57].forEach(handleTextQuestion);